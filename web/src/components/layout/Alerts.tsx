import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    <React.Fragment>
      {alertContext &&
        alertContext.alerts &&
        alertContext.alerts.length > 0 &&
        alertContext.alerts.map((alert: any) => (
          <div key={alert.id} className={`alert alert-${alert.type}`}>
            <i className="fas fa-info-circle" /> {alert.msg}
          </div>
        ))}
    </React.Fragment>
  );
};

export default Alerts;
