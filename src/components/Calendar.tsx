import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid'

// full calendar 패키지 설치 : core + 플러그인들(core만으론 암것도 못함)
// npm install \
//   @fullcalendar/core \
//   @fullcalendar/daygrid \
//   @fullcalendar/timegrid \
//   @fullcalendar/list

export default function Calendar() {

    // event가 특정 기간동안 반복되는 것을 recurr라고 하고
    // event를 특정 기간동안 반복하는 데이터로 만드는것을 expand한다고 한다.
    // full calendar는 간단한 recurrence를 제공한다 (일/주 단위 반복)

    // 이벤트 데이터는 다음과같은 프로퍼티를 포함한 js객체로 전달한다.
    const eventObject = {
        id: "", // string 혹은 integer. getEventById할때 사용.
        title: "test data", // 이벤트 텍스트
        start: "2023-08-24", // 이벤트 시작 시간 - 날짜로 파싱 가능한 타입의 데이터 / allDay가 명시적으로 true가 아닐 때 start, end 둘 다 시간/분이 없으면 allday로 가정하고,
        // 둘중 하나에 시간이 붙으면 그건 allday로 가정하지 않는다.
        end : "2023-09-01", // 이벤트 종료 시간 - 이벤트가 display되는 영역은 end를 포함하지 않는다.
        url: "", // 이벤트 클릭시 접근하게 되는 url. (eventClick 콜백 내용 참고)
        className: "",// 이벤트 html요소의 class. classNames 로 하면 String[]타입으로 넣는것도 가능.
        color:"var(--color-major)", // background, border에 일괄 적용되는 색상
        backgroundColor: "", // background에 적용되는 색상
        borderColor: "", // border에 적용되는 색상
        textColor: "", // 글자에 적용되는 색상
    }

    const eventObject2 = {
        id: "eventObject2",
        title : "test data2",
        start:"2023-08-19",
        end:"2023-08-31",
        url: "", // 이벤트 클릭시 접근하게 되는 url. (eventClick 콜백 내용 참고)
        className: "",// 이벤트 html요소의 class. classNames 로 하면 String[]타입으로 넣는것도 가능.
        color:"var(--color-common)", // background, border에 일괄 적용되는 색상
        backgroundColor: "", // background에 적용되는 색상
        borderColor: "", // border에 적용되는 색상
        textColor: "", // 글자에 적용되는 색상
    }

    const eventObject3 = {
        id: "eventObject3",
        title : "test data2",
        start:"2023-08-16",
        end:"2023-08-25",
        url: "", // 이벤트 클릭시 접근하게 되는 url. (eventClick 콜백 내용 참고)
        className: "",// 이벤트 html요소의 class. classNames 로 하면 String[]타입으로 넣는것도 가능.
        color:"var(--color-important)", // background, border에 일괄 적용되는 색상
        backgroundColor: "", // background에 적용되는 색상
        borderColor: "", // border에 적용되는 색상
        textColor: "", // 글자에 적용되는 색상
    }

    return (
            <div className='calendar-container'>
                <FullCalendar
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin
                    ]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek'
                    }}
                    initialView='dayGridMonth'
                    nowIndicator={true}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    navLinks={true}
                    navLinkDayClick={(date, jsEvent) => {
                        console.log('day', date.toISOString());
                        console.log('coords', jsEvent.pageX, jsEvent.pageY);
                    }}
                    initialEvents={[
                        eventObject, eventObject2, eventObject3
                        // {title: 'nice event', start: new Date(), resourceId: 'a'}
                    ]}
                />
            </div>
    )
}
