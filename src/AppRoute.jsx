import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./lang/i18next";
import SignupIndex from "./components/modules/nfc-section/sign-up/SignupIndex";
import SignupViewIndex from "./components/modules/nfc-section/sign-upView/Sign-upViewIndex";
import SignupEditIndex from "./components/modules/nfc-section/sign-upEdit/Sign-upEditIndex";
import SignupTableIndex from "./components/modules/nfc-section/sign-upTable/Sign-upTableIndex";
import SelectDesignIndex from "./components/modules/nfc-section/selectDesign.jsx/SelectDesignIndex";
import ConfirmationIndex from "./components/modules/nfc-section/sign-upConfirmation/ConfirmationIndex";
import Login from "./components/modules/Login";
function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignupIndex />} />
        <Route path="vcard/:id" element={<SignupViewIndex />} />
        <Route path="edit/:id" element={<SignupEditIndex />} />
        <Route path="users" element={<SignupTableIndex />} />
        <Route path="card-select/:id" element={<SelectDesignIndex />} />
        <Route path="sign-upConfirmation" element={<ConfirmationIndex />} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
