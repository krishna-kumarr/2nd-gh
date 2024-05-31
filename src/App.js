import { Route, Routes } from "react-router-dom";
import SuperAdminStateManagement from "./SuperAdmin/Resuable_Comp/SuperAdminStateManagement";
import SuperAdminProfessional from "./SuperAdmin/SuperAdminProfessional";
import SuperAdminEmployer from "./SuperAdmin/SuperAdminEmployer";
import ProfessionalMinDevice from "./SuperAdmin/Resuable_Comp/ProfessionalMinDevice";
import EmployerMinDevice from "./SuperAdmin/Resuable_Comp/EmployerMinDevice";
import SuperAdminAnalysis from "./SuperAdmin/SuperAdminAnalysis";

function App() {
  return (
    <> 
      <Routes>
        <Route path="super_admin" element={<SuperAdminStateManagement/>}>
          <Route path="professional">
            <Route index exact element={<SuperAdminProfessional/>}/>
            <Route path="candidates_details" element={<ProfessionalMinDevice/>}/>
          </Route>
          <Route path="employer">
            <Route index exact element={<SuperAdminEmployer/>}/>
            <Route path="job_details" element={<EmployerMinDevice/>}/>
          </Route>
          <Route path="analysis" element={<SuperAdminAnalysis/>}/>
        </Route>
 
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
