import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import PhoneIcon from "@material-ui/icons/Phone";
import { createMuiTheme } from "@material-ui/core/styles";

import { ContactCreate, ContactEdit, ContactList } from "./crud";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <div className="App">
      <Admin
        {...{ theme }}
        dataProvider={simpleRestProvider("http://localhost:3001")}
      >
        <Resource
          name="contacts"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          icon={PhoneIcon}
        />
      </Admin>
    </div>
  );
}

export default App;
