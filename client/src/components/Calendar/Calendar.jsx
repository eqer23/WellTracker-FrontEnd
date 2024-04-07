import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
let URL = import.meta.env.VITE_SERVER_URL;
// import { scheduleData } from '../data/dummy';
import Navbar from "../Navbar/Navbar";
// eslint-disable-next-line react/destructuring-assignment
const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Scheduler = ({
    defaultView = "Week",
    availableViews = ["Day", "Week", "WorkWeek", "Month", "Agenda"],
}) => {
    const [scheduleObj, setScheduleObj] = useState();
    const [currentUser, setCurrentUser] = useState(undefined);
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getFromBackend = async (id) => {
            console.log("HI " + id);
            try {
                const response = await axios.get(URL + "sendevents", {
                    params: {
                        _userId: id,
                    },
                });

                console.log("Data successfully retreived from the backend:");
                console.log(response.data[0].eventData[0]);
                setEvents(response.data.map((data) => data.eventData[0]));
            } catch (error) {
                console.error("Error sending data to backend:", error);
            }
        };
        const fetchData = async () => {
            if (!localStorage.getItem("session-token")) {
                navigate("/login");
                alert("You cannot use chat if you haven't logged in.");
            } else {
                const decodedToken = jwtDecode(
                    localStorage.getItem("session-token")
                );
                setCurrentUser(decodedToken);
                getFromBackend(decodedToken._id);
            }
        };

        fetchData();
    }, [navigate]);

    const change = (args) => {
        scheduleObj.selectedDate = args.value;
        console.log(scheduleObj.selectedDate);
        scheduleObj.dataBind();
    };

    const onDragStart = (arg) => {
        arg.navigation.enable = true;
    };

    const onActionComplete = async (args) => {
        console.log("in action complete: ", args);
        // Checking if the action is either creating a new event or editing an existing one
        if (
            args.requestType === "eventCreated"
            // args.requestType === "eventChanged"
        ) {
            // args.data contains the event details in an array for create and as an object for edit
            const eventData =
                (await args.requestType) === "eventCreate"
                    ? args.data[0]
                    : args.data;

            console.log("EVENT CREATED!", eventData); // For debugging. You'll see this in your browser's console

            // Send this data to your backend
            sendDataToBackend(eventData, "create");
        } else if (args.requestType === "eventChanged") {
            const eventData =
                (await args.requestType) === "eventChanged"
                    ? args.data[0]
                    : args.data;

            console.log("event updated: ", eventData); // For debugging. You'll see this in your browser's console

            // Send this data to your backend
            sendDataToBackend(eventData, "update");

            // used to delete an event
        } else if (args.requestType === "eventRemoved") {
            const eventData = await args.data[0];
            sendDataToBackend(eventData.Id, "delete");
        }
    };

    /*
    Data Scehma -- make a new model that looks like user
    { 
        userId: 123
        eventData: blah
    }
 
    > router
    router.get(/frontendCallsBackend, backend())
    router.get(/frontendCallsGetData, getData())

    > controller 1 -- backend like login
    function backend() {
        const {currentUser, eventData} = req.body;
        if (currentUser+_id in dataase {
            do 
        })
    }

    > controller 2 -- backend like chat
    function getData() {
        data.js/getAllUsers()
    }
    */

    const sendDataToBackend = async (eventData, actionType) => {
        // try {
        //     // axio.post(/frontendCallsGetdata)
        //     const response = await axios.post(URL + "getevents", {
        //         currentUser: currentUser._id,
        //         eventData,
        //     });

        //     console.log("Data successfully sent to backend:", response.data);
        // } catch (error) {
        //     console.error("Error sending data to backend:", error);
        // }
        try {
            if (actionType === "create") {
                const response = await axios.post(URL + "getevents", {
                    currentUser: currentUser._id,
                    eventData,
                });

                console.log("Backend response:", response.data);
            } else if (actionType === "update") {
                const response = await axios.post(URL + "updateevent", {
                    currentUser: currentUser._id,
                    eventData,
                });
                console.log("Backend response:", response.data);
            } else if (actionType === "delete") {
                // Adjusted code for deleting an event
                const response = await axios.post(URL + "deleteevent", {
                    currentUser: currentUser._id,
                    eventData,
                });
                console.log("Event successfully deleted:", response.data);
            }
        } catch (error) {
            console.error("Error communicating with the backend:", error);
        }
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
                    currentUser={currentUser}
                    dragStart={onDragStart}
                    actionComplete={onActionComplete}
                    eventSettings={{ dataSource: events }}
                >
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
                                        value={new Date(2024, 3, 2)}
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
