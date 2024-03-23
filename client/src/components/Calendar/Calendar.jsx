import React, { useState } from "react";
import {
    ScheduleComponent,
    ViewsDirective,
    ViewDirective,
    Day,
    Week,
    WorkWeek,
    Month,
    Agenda,
    Inject,
    Resize,
    DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
// import './Calendar.css';

// import { scheduleData } from '../data/dummy';
import Navbar from "../Navbar/Navbar";
// eslint-disable-next-line react/destructuring-assignment
const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Scheduler = ({
    defaultView = "Week",
    availableViews = ["Day", "Week", "WorkWeek", "Month", "Agenda"],
}) => {
    const [scheduleObj, setScheduleObj] = useState();

    const change = (args) => {
        scheduleObj.selectedDate = args.value;
        scheduleObj.dataBind();
    };

    const onDragStart = (arg) => {
        // eslint-disable-next-line no-param-reassign
        arg.navigation.enable = true;
    };

    return (
        <div className="calendar-div">
            <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
                <Navbar category="App" title="Calendar" />
                <ScheduleComponent
                    height="500px"
                    ref={(schedule) => setScheduleObj(schedule)}
                    selectedDate={new Date(2024, 3, 23)}
                    // eventSettings={{ dataSource: scheduleData }}
                    currentView={defaultView}
                    dragStart={onDragStart}
                >
                    {/* <ViewsDirective>
                        {["Day", "Week", "WorkWeek", "Month", "Agenda"].map(
                            (item) => (
                                <ViewDirective key={item} option={item} />
                            )
                        )}
                    </ViewsDirective> */}
                    <ViewsDirective>
                        {availableViews.map(
                            (
                                item // Dynamically generates view options based on availableViews prop
                            ) => (
                                <ViewDirective key={item} option={item} />
                            )
                        )}
                    </ViewsDirective>
                    <Inject
                        services={[
                            Day,
                            Week,
                            WorkWeek,
                            Month,
                            Agenda,
                            Resize,
                            DragAndDrop,
                        ]}
                    />
                </ScheduleComponent>
                <PropertyPane>
                    <table style={{ width: "100%", background: "white" }}>
                        <tbody>
                            <tr style={{ height: "50px" }}>
                                <td style={{ width: "100%" }}>
                                    <DatePickerComponent
                                        value={new Date(2024, 2, 23)}
                                        showClearButton={false}
                                        placeholder="Current Date"
                                        floatLabelType="Always"
                                        change={change}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </PropertyPane>
            </div>
        </div>
    );
};

export default Scheduler;

// import * as React from "react";
// import { createRoot } from "react-dom/client";
// import {
//     ScheduleComponent,
//     Day,
//     Week,
//     WorkWeek,
//     Month,
//     Agenda,
//     Inject,
// } from "@syncfusion/ej2-react-schedule";

// const Calendar = () => {
//     return (
//         <ScheduleComponent>
//             <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
//         </ScheduleComponent>
//     );
// };

// export default Calendar;

// // Ensure the DOM element is available; this might vary depending on your HTML structure
// document.addEventListener("DOMContentLoaded", () => {
//     const container = document.getElementById("schedule");
//     if (container) {
//         const root = createRoot(container); // Use createRoot to create a root.
//         root.render(<App />); // Use the render method on the created root.
//     } else {
//         console.error("Failed to find the target container");
//     }
// });
