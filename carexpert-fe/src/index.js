import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './component/Home/Home';
import Alert from './component/Alert/Alert';
import HospitalReg from './component/HospitalReg/HospitalReg';
import DoctorReg from './component/DoctorReg/DoctorReg';
import PatientReg from './component/PatientReg/PatientReg';
import HospitalLogin from './component/HospitalLogin/HospitalLogin';
import DoctorLogin from './component/DoctorLogin/DoctorLogin';
import PatientLogin from './component/PatientLogin/PatientLogin';
import HomeCon from './component/HomeCon/HomeCon';
import PatientList from './component/Tabs/Hos/PatientList';
import PatientListD from './component/Tabs/Doc/PatientListd';
import DoctorList from './component/Tabs/Hos/DoctorList';
import {PatientProfile} from './component/Tabs/Pat/Profile';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/" element={<Home/>}/>
        <Route path="/HospitalReg" element={<HospitalReg/>}/>
        <Route path="/HospitalLogin" element={<HospitalLogin/>}/>
        <Route path="/DoctorLogin" element={<DoctorLogin/>}/>
        <Route path="/PatientLogin" element={<PatientLogin/>}/>
        <Route path="/Home" element={<HomeCon/>}>
        <Route path="/Home/Hos/DoctorReg" element={<DoctorReg/>}/>
        <Route path="/Home/Hos/PatientReg" element={<PatientReg/>}/>
        <Route path="/Home/Hos/Patients" element={<PatientList/>}/>
        <Route path="/Home/Hos/Doctors" element={<DoctorList/>}/>
        <Route path="/Home/Doc/Patients" element={<PatientListD/>}/>
        <Route path="/Home/Pat/Profile/:id" element={<PatientProfile/>}/>
        
        
        
        </Route>
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
