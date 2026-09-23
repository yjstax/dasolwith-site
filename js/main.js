// ===== 네비게이션 스크롤 효과 =====
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===== 모바일 메뉴 토글 =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');

if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        
        if (nav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// 네비게이션 링크 클릭 시 모바일 메뉴 닫기
if (mobileMenuBtn && nav) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// ===== 메뉴 클릭 시 해당 섹션으로 바로 이동 =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = header ? header.offsetHeight : 80;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            // 메뉴 클릭 시 스크롤 움직임 없이 바로 이동 (페이지가 바뀌는 느낌, 2026-09-23 사용자 요청)
            window.scrollTo({
                top: targetPosition,
                behavior: 'auto'
            });
        }
    });
});

// ===== 스크롤 애니메이션 =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 애니메이션 대상 요소들
const animateElements = document.querySelectorAll('.service-card, .expertise-card, .stat-card, .about-text, .contact-info, .contact-form-wrapper');

animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ===== 폼 제출 처리 =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 폼 데이터 수집
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };
        
        // 실제 환경에서는 서버로 전송
        console.log('상담 신청 데이터:', formData);
        
        // 성공 메시지 표시
        alert('상담 신청이 완료되었습니다.\n빠른 시일 내에 연락드리겠습니다.');
        
        // 폼 초기화
        contactForm.reset();
    });
}

// ===== 숫자 카운팅 애니메이션 =====
const statNumbers = document.querySelectorAll('.stat-number');

const animateCount = (element) => {
    const target = element.textContent;
    const isPercentage = target.includes('%');
    const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
    const duration = 2000; // 2초
    const increment = numericValue / (duration / 16); // 60fps 기준
    let current = 0;
    
    const updateCount = () => {
        current += increment;
        if (current < numericValue) {
            element.textContent = Math.floor(current) + (isPercentage ? '%' : '+');
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target;
        }
    };
    
    updateCount();
};

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCount(entry.target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statObserver.observe(stat);
});

// ===== 활성 네비게이션 링크 표시 =====
const sections = document.querySelectorAll('section[id]');

const highlightNavigation = () => {
    const scrollY = window.pageYOffset;
    
    // 현재 스크롤 위치에서 가장 가까운 섹션 찾기
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // 모든 링크에서 active 제거
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // 현재 섹션에 해당하는 링크에만 active 추가
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// ===== 초기 로드 시 애니메이션 =====
window.addEventListener('load', () => {
    // 히어로 섹션 애니메이션은 CSS로 처리됨
    highlightNavigation();
});

// ===== FAQ 아코디언 =====
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    console.log('FAQ 초기화: ' + faqItems.length + '개 항목 발견');
    
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                console.log('FAQ 클릭: ' + (index + 1) + '번 항목');
                
                // 다른 FAQ 닫기
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // 현재 FAQ 토글
                item.classList.toggle('active');
            });
        } else {
            console.warn('FAQ 질문 요소를 찾을 수 없음: ' + (index + 1) + '번 항목');
        }
    });
});

// ===== 맨 위로 버튼 =====
const topBtn = document.getElementById('topBtn');

if (topBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            topBtn.classList.add('show');
        } else {
            topBtn.classList.remove('show');
        }
    });

    topBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== 조세뉴스 필터 =====
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 활성 버튼 변경
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 필터링
            const year = btn.dataset.year;
            
            newsCards.forEach(card => {
                if (year === 'all') {
                    card.classList.remove('hidden');
                } else {
                    if (card.dataset.year === year) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
});