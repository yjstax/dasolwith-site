// 세무 캘린더 - 2026년 세무일정 (주요 세무 일정만)
// 다가오는 3개 일정만 표시, 같은 날짜 여러 일정 그룹화
// 개별소비세, 주세, 교통·에너지·환경세, 교육세, 학자금상환(ICL) 제외

const taxCalendar2026 = {
    '01-12': [
        {
            title: '원천세(반기납 포함) 신고·납부',
            description: '2025년 12월분(2025.7~12월분)',
            type: '원천세',
            importance: 'high'
        }
    ],
    '01-26': [
        {
            title: '2025년 2기 부가가치세 확정신고·납부',
            description: '2025.7~12월분',
            type: '부가가치세',
            importance: 'high'
        }
    ],
    '02-02': [
        {
            title: '일용근로소득지급명세서 제출',
            description: '2025년 12월 지급분',
            type: '소득세',
            importance: 'medium'
        },
        {
            title: '간이지급명세서 제출 및 용역제공자 과세자료 제출',
            description: '2025년 하반기분',
            type: '소득세',
            importance: 'medium'
        },
        {
            title: '5월말 결산법인 법인세 중간예납 및 10월말 결산법인 법인세 신고·납부',
            description: '해당 법인',
            type: '법인세',
            importance: 'medium'
        },
        {
            title: '소득세 중간예납분 분납',
            description: '2025년 1~6월분',
            type: '종합소득세',
            importance: 'medium'
        }
    ],
    '02-10': [
        {
            title: '부가가치세 면세사업자 사업장 현황신고',
            description: '2025년 귀속',
            type: '부가가치세',
            importance: 'high'
        },
        {
            title: '원천세 신고·납부',
            description: '2026년 1월분',
            type: '원천세',
            importance: 'high'
        }
    ],
    '03-03': [
        {
            title: '11월말 결산법인 법인세 신고·납부 및 6월말 결산법인 법인세 중간예납',
            description: '해당 법인',
            type: '법인세',
            importance: 'medium'
        },
        {
            title: '각종 명세서 제출',
            description: '가상자산 거래명세서, 일용근로소득, 간이지급명세서 등 (2026년 1월분)',
            type: '소득세',
            importance: 'medium'
        }
    ],
    '03-10': [
        {
            title: '2025년 연말정산 환급신청',
            description: '2025년 귀속',
            type: '소득세',
            importance: 'high'
        },
        {
            title: '근로·퇴직·사업 등 지급명세서 제출',
            description: '2025년 귀속',
            type: '소득세',
            importance: 'high'
        },
        {
            title: '원천세 신고·납부',
            description: '2026년 2월분',
            type: '원천세',
            importance: 'high'
        }
    ],
    '03-16': [
        {
            title: '2025년 귀속 하반기분 근로장려금 신청',
            description: '2025년 귀속',
            type: '근로장려금',
            importance: 'medium'
        }
    ],
    '03-31': [
        {
            title: '12월말 결산법인 법인세 신고·납부',
            description: '2025.1~12월분',
            type: '법인세',
            importance: 'high'
        },
        {
            title: '7월말 결산법인 법인세 중간예납',
            description: '해당 법인',
            type: '법인세',
            importance: 'medium'
        }
    ],
    '04-10': [
        {
            title: '원천세 신고·납부',
            description: '2026년 3월분',
            type: '원천세',
            importance: 'high'
        }
    ],
    '04-27': [
        {
            title: '2026년 1기 부가가치세 예정신고·납부',
            description: '2026.1~3월분',
            type: '부가가치세',
            importance: 'high'
        }
    ],
    '04-30': [
        {
            title: '1월말 결산법인 법인세 신고·납부',
            description: '해당 법인',
            type: '법인세',
            importance: 'medium'
        },
        {
            title: '8월말 결산법인 법인세 중간예납',
            description: '해당 법인',
            type: '법인세',
            importance: 'medium'
        },
        {
            title: '12월말 결산 연결납세방식 및 성실신고확인대상 법인 법인세 신고·납부',
            description: '2025.1~12월분',
            type: '법인세',
            importance: 'high'
        }
    ],
    '05-11': [
        {
            title: '원천세 신고·납부',
            description: '2026년 4월분',
            type: '원천세',
            importance: 'high'
        }
    ],
    '06-01': [
        {
            title: '2025년 귀속 종합소득세 확정신고·납부',
            description: '2025년 귀속분',
            type: '종합소득세',
            importance: 'high'
        },
        {
            title: '2월말 결산법인 법인세 신고·납부',
            description: '해당 법인',
            type: '법인세',
            importance: 'medium'
        },
        {
            title: '9월말 결산법인 법인세 중간예납',
            description: '해당 법인',
            type: '법인세',
            importance: 'medium'
        },
        {
            title: '2025년 귀속 정기분 근로·자녀장려금 신청',
            description: '2025년 귀속',
            type: '근로장려금',
            importance: 'medium'
        }
    ],
    '06-10': [
        {
            title: '원천세 신고·납부',
            description: '2026년 5월분',
            type: '원천세',
            importance: 'high'
        }
    ],
    '06-30': [
        {
            title: '3월말 결산법인 법인세 신고·납부',
            description: '해당 법인',
            type: '법인세',
            importance: 'high'
        },
        {
            title: '10월말 결산법인 법인세 중간예납',
            description: '해당 법인',
            type: '법인세',
            importance: 'medium'
        },
        {
            title: '성실신고확인대상사업자 종합소득세 확정신고·납부',
            description: '2025년 귀속',
            type: '종합소득세',
            importance: 'high'
        },
        {
            title: '원천세 반기별 납부 신청기한',
            description: '2026년 하반기 적용',
            type: '원천세',
            importance: 'medium'
        }
    ],
    '07-10': [
        {
            title: '원천세(반기납 포함) 신고·납부',
            description: '2026년 6월분(2026.1~6월분)',
            type: '원천세',
            importance: 'high'
        }
    ],
    '07-27': [
        {
            title: '2026년 1기 부가가치세 확정신고·납부',
            description: '2026.1~6월분',
            type: '부가가치세',
            importance: 'high'
        }
    ],
    '07-31': [
        {
            title: '4월말 결산법인 법인세 신고·납부',
            description: '해당 법인',
            type: '법인세',
            importance: 'medium'
        },
        {
            title: '11월말 결산법인 법인세 중간예납',
            description: '해당 법인',
            type: '법인세',
            importance: 'medium'
        },
        {
            title: '간이지급명세서(근로소득) 제출',
            description: '2026년 1~6월 지급분',
            type: '소득세',
            importance: 'medium'
        }
    ],
    '08-03': [
        {
            title: '종합소득세 확정신고분 분납',
            description: '5월 신고분',
            type: '종합소득세',
            importance: 'medium'
        }
    ],
    '08-10': [
        {
            title: '원천세 신고·납부',
            description: '2026년 7월분',
            type: '원천세',
            importance: 'high'
        }
    ],
    '08-31': [
        {
            title: '5월말 결산법인 법인세 신고·납부',
            description: '2026.1~6월분',
            type: '법인세',
            importance: 'medium'
        },
        {
            title: '12월말 결산법인 법인세 중간예납',
            description: '해당 법인',
            type: '법인세',
            importance: 'medium'
        },
        {
            title: '종합소득세 확정신고분 분납(성실신고확인서 제출자)',
            description: '6월 신고분',
            type: '종합소득세',
            importance: 'medium'
        }
    ],
    '09-10': [
        {
            title: '원천세 신고·납부',
            description: '2026년 8월분',
            type: '원천세',
            importance: 'high'
        }
    ],
    '09-15': [
        {
            title: '2026년 귀속 상반기분 근로·자녀장려금 신청',
            description: '2026년 귀속',
            type: '근로장려금',
            importance: 'medium'
        }
    ],
    '09-30': [
        {
            title: '6월말 결산법인 법인세 신고·납부',
            description: '해당 법인',
            type: '법인세',
            importance: 'high'
        },
        {
            title: '1월말 결산법인 법인세 중간예납',
            description: '해당 법인',
            type: '법인세',
            importance: 'medium'
        }
    ],
    '10-12': [
        {
            title: '원천세 신고·납부',
            description: '2026년 9월분',
            type: '원천세',
            importance: 'high'
        }
    ],
    '10-26': [
        {
            title: '2026년 2기 부가가치세 예정신고·납부',
            description: '2026.7~9월분',
            type: '부가가치세',
            importance: 'high'
        }
    ],
    '11-02': [
        {
            title: '7월말 결산법인 법인세 신고·납부',
            description: '해당 법인',
            type: '법인세',
            importance: 'medium'
        },
        {
            title: '2월말 결산법인 법인세 중간예납',
            description: '해당 법인',
            type: '법인세',
            importance: 'medium'
        }
    ],
    '11-10': [
        {
            title: '원천세 신고·납부',
            description: '2026년 10월분',
            type: '원천세',
            importance: 'high'
        }
    ],
    '11-30': [
        {
            title: '8월말 결산법인 법인세 신고·납부',
            description: '해당 법인',
            type: '법인세',
            importance: 'medium'
        },
        {
            title: '3월말 결산법인 법인세 중간예납',
            description: '해당 법인',
            type: '법인세',
            importance: 'medium'
        },
        {
            title: '소득세 중간예납 납부 및 추계액 신고·납부',
            description: '2026.1~6월분',
            type: '종합소득세',
            importance: 'high'
        },
        {
            title: '2025년 귀속 정기분 근로·자녀장려금 기한 후 신청',
            description: '2025년 귀속',
            type: '근로장려금',
            importance: 'medium'
        }
    ],
    '12-10': [
        {
            title: '원천세 신고·납부',
            description: '2026년 11월분',
            type: '원천세',
            importance: 'high'
        }
    ],
    '12-15': [
        {
            title: '종합부동산세 납부',
            description: '2026년 귀속',
            type: '종합부동산세',
            importance: 'high'
        }
    ],
    '12-31': [
        {
            title: '9월말 결산법인 법인세 신고·납부',
            description: '해당 법인',
            type: '법인세',
            importance: 'high'
        },
        {
            title: '4월말 결산법인 법인세 중간예납',
            description: '해당 법인',
            type: '법인세',
            importance: 'medium'
        }
    ]
};

// 날짜를 MM-DD 형식으로 변환
function formatDateKey(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}-${day}`;
}

// 날짜 차이 계산 (일 단위)
function getDaysDifference(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round((date2 - date1) / oneDay);
}

// 오늘 날짜 기준으로 다가오는 3개 날짜 찾기 (오늘 제외)
function getUpcomingSchedules() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentYear = today.getFullYear();
    
    const dateSchedules = [];
    
    // 날짜별로 그룹화
    for (const [dateKey, schedules] of Object.entries(taxCalendar2026)) {
        const [month, day] = dateKey.split('-').map(Number);
        const scheduleDate = new Date(currentYear, month - 1, day);
        scheduleDate.setHours(0, 0, 0, 0);
        
        // 오늘 이후의 일정만 포함 (오늘은 제외)
        if (scheduleDate > today) {
            dateSchedules.push({
                date: scheduleDate,
                dateKey: dateKey,
                schedules: Array.isArray(schedules) ? schedules : [schedules]
            });
        }
    }
    
    // 날짜순으로 정렬
    dateSchedules.sort((a, b) => a.date - b.date);
    
    // 가장 가까운 3개 날짜만 반환
    return dateSchedules.slice(0, 3);
}

// 오늘의 일정 확인
function getTodaySchedules() {
    const today = new Date();
    const todayKey = formatDateKey(today);
    const schedules = taxCalendar2026[todayKey];
    return schedules ? (Array.isArray(schedules) ? schedules : [schedules]) : null;
}

// D-Day 표시 생성
function createDdayBadge(daysLeft) {
    if (daysLeft === 0) {
        return '<span class="dday-badge today">오늘</span>';
    } else if (daysLeft === 1) {
        return '<span class="dday-badge tomorrow">내일</span>';
    } else if (daysLeft <= 7) {
        return `<span class="dday-badge urgent">D-${daysLeft}</span>`;
    } else if (daysLeft <= 14) {
        return `<span class="dday-badge soon">D-${daysLeft}</span>`;
    } else {
        return `<span class="dday-badge normal">D-${daysLeft}</span>`;
    }
}

// 중요도에 따른 아이콘 생성
function getImportanceIcon(importance) {
    if (importance === 'high') {
        return '<i class="fas fa-exclamation-circle" style="color: #dc3545;"></i>';
    } else if (importance === 'medium') {
        return '<i class="fas fa-info-circle" style="color: #ffc107;"></i>';
    } else {
        return '<i class="fas fa-check-circle" style="color: #28a745;"></i>';
    }
}

// 같은 날짜의 여러 일정을 표시하는 카드 생성
function createDateScheduleCard(dateScheduleGroup, daysLeft) {
    const dateStr = dateScheduleGroup.date.toLocaleDateString('ko-KR', { 
        month: 'long', 
        day: 'numeric',
        weekday: 'short'
    });
    
    // 가장 높은 중요도 결정
    const hasHigh = dateScheduleGroup.schedules.some(s => s.importance === 'high');
    const hasMedium = dateScheduleGroup.schedules.some(s => s.importance === 'medium');
    const importance = hasHigh ? 'high' : (hasMedium ? 'medium' : 'low');
    
    let schedulesHtml = '';
    dateScheduleGroup.schedules.forEach((schedule, index) => {
        schedulesHtml += `
            <div class="schedule-item" style="margin-bottom: ${index < dateScheduleGroup.schedules.length - 1 ? '12px' : '0'}; padding-bottom: ${index < dateScheduleGroup.schedules.length - 1 ? '12px' : '0'}; border-bottom: ${index < dateScheduleGroup.schedules.length - 1 ? '1px solid #e9ecef' : 'none'};">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px;">
                    ${getImportanceIcon(schedule.importance)}
                    <h4 class="schedule-title" style="margin: 0; font-size: 1rem;">${schedule.title}</h4>
                </div>
                <p class="schedule-description" style="margin: 5px 0 5px 28px; font-size: 0.9rem;">${schedule.description}</p>
                <span class="schedule-type-badge" style="margin-left: 28px;">${schedule.type}</span>
            </div>
        `;
    });
    
    return `
        <div class="tax-schedule-card ${importance}">
            <div class="schedule-header">
                <div class="schedule-date">
                    <i class="fas fa-calendar"></i>
                    <span>${dateStr}</span>
                </div>
                ${createDdayBadge(daysLeft)}
            </div>
            <div class="schedules-list">
                ${schedulesHtml}
            </div>
        </div>
    `;
}

// 세무 일정 렌더링
function renderTaxCalendar() {
    const container = document.getElementById('tax-calendar-container');
    if (!container) return;
    
    const todaySchedules = getTodaySchedules();
    const upcomingDateSchedules = getUpcomingSchedules();
    
    let html = '';
    
    // 오늘의 일정 표시
    if (todaySchedules && todaySchedules.length > 0) {
        const today = new Date();
        html += `
            <div class="today-schedule-highlight">
                <h3>
                    <i class="fas fa-calendar-day"></i>
                    오늘의 세무 일정
                </h3>
                ${createDateScheduleCard({ date: today, schedules: todaySchedules }, 0)}
            </div>
        `;
    }
    
    // 다가오는 일정 표시 (3개 날짜)
    html += `
        <div class="upcoming-schedules">
            <h3>
                <i class="fas fa-calendar-alt"></i>
                다가오는 세무 일정
            </h3>
            <div class="schedules-grid">
    `;
    
    if (upcomingDateSchedules.length === 0) {
        html += `
            <div class="no-schedule">
                <i class="fas fa-calendar-check"></i>
                <p>다가오는 주요 세무 일정이 없습니다.</p>
            </div>
        `;
    } else {
        upcomingDateSchedules.forEach(dateScheduleGroup => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const scheduleDate = new Date(dateScheduleGroup.date);
            scheduleDate.setHours(0, 0, 0, 0);
            const daysLeft = getDaysDifference(today, scheduleDate);
            
            html += createDateScheduleCard(dateScheduleGroup, daysLeft);
        });
    }
    
    html += `
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// 페이지 로드 시 세무 일정 표시
document.addEventListener('DOMContentLoaded', () => {
    renderTaxCalendar();
    
    // 자정에 자동 업데이트 (다음 날로 넘어갈 때)
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeUntilMidnight = tomorrow - now;
    
    setTimeout(() => {
        renderTaxCalendar();
        // 이후 매일 자정마다 업데이트
        setInterval(renderTaxCalendar, 24 * 60 * 60 * 1000);
    }, timeUntilMidnight);
});
