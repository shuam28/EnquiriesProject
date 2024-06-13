import React from "react";
import "../../Styles/enquiryDashboard.css";
import { Link } from "react-router-dom";

function EnquiryDashboard() {
  return (
    <div className="enquiry-dashboard">
      <div className="action-bar">
        <div className="header-enquiry">
          <h2>Enquiries</h2>
          <div className="icons gap-1">
            <img src="Icon-settings.png" alt="Settings" />
            <img src="/right-from-bracket.png" alt="Logout" />
          </div>
        </div>
        <div className="nav-input">
          <input type="text" placeholder="Search enquiries" />
          <Link to="/enquiryForm">
            <button className="add-button">Add new</button>
          </Link>
          <input type="text" placeholder="Archived" className="text-center" style={{width:"154px"}}/>
          <input type="text" placeholder="Filter enquiries" />
        </div>
      </div>
      <div className="enquiries-list">
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Type</th>
              <th>Status</th>
              <th>Venue A</th>
              <th>Venue B</th>
              <th>Event Date</th>
              <th>Enquiry Stage</th>
              <th>Email</th>
              <th>Archive</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Moss</td>
              <td className="type">Wedding</td>
              <td>Enquiry</td>
              <td>Caswell House</td>
              <td>Caswell House</td>
              <td>Sat, 12 June 24</td>
              <td>
                <ListStatusButton status="Pending" />
              </td>
              <td>
                <EmailArchiveButton title="Email" />
              </td>
              <td>
                <EmailArchiveButton title="Archieve" />
              </td>
            </tr>
            <tr>
              <td>Rupert Maitland Titterton</td>
              <td className="type">Sympathy</td>
              <td>Enquiry</td>
              <td>Caswell House</td>
              <td>Caswell House</td>
              <td>Sun, 13 June 24</td>
              <td>
                <ListStatusButton status="Ongoing" />
              </td>
              <td>
                <EmailArchiveButton title="Email" />
              </td>
              <td>
                <EmailArchiveButton title="Archieve" />
              </td>
            </tr>
            <tr>
              <td>Elizabeth Botsford</td>
              <td className="type">Party</td>
              <td>Booked</td>
              <td>Caswell House</td>
              <td>Caswell House</td>
              <td>Fri, 3 Apr 24</td>
              <td>
                <ListStatusButton status="Done" />
              </td>
              <td>
                <EmailArchiveButton title="Email" />
              </td>
              <td>
                <EmailArchiveButton title="Archieve" />
              </td>
            </tr>
            <tr>
              <td>Jane Carr</td>
              <td className="type">Wedding</td>
              <td>Enquiry</td>
              <td>Caswell House</td>
              <td>Caswell House</td>
              <td>Sat, 12 June 24</td>
              <td>
                <ListStatusButton status="New" />
              </td>
              <td>
                <EmailArchiveButton title="Email" />
              </td>
              <td>
                <EmailArchiveButton title="Archieve" />
              </td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td className="type">Corporate</td>
              <td>Enquiry</td>
              <td>Caswell House</td>
              <td>Caswell House</td>
              <td>Sun, 13 June 24</td>
              <td>
                <ListStatusButton status="Ongoing" />
              </td>
              <td>
                <EmailArchiveButton title="Email" />
              </td>
              <td>
                <EmailArchiveButton title="Archieve" />
              </td>
            </tr>
            <tr>
              <td>Eleanor Rigby</td>
              <td className="type">Party</td>
              <td>Booked</td>
              <td>Caswell House</td>
              <td>Caswell House</td>
              <td>Fri, 3 Apr 24</td>
              <td>
                <ListStatusButton status="Done" />
              </td>
              <td>
                <EmailArchiveButton title="Email" />
              </td>
              <td>
                <EmailArchiveButton title="Archieve" />
              </td>
            </tr>
            <tr>
              <td>Fiona Harper</td>
              <td className="type">Wedding</td>
              <td>Enquiry</td>
              <td>Caswell House</td>
              <td>Caswell House</td>
              <td>Sat, 12 June 24</td>
              <td>
                <ListStatusButton status="Done" />
              </td>
              <td>
                <EmailArchiveButton title="Email" />
              </td>
              <td>
                <EmailArchiveButton title="Archieve" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const EmailArchiveButton = ({ title }) => {
  return (
    <button className="email-archive-button">{title}</button>
  );
};

const ListStatusButton = ({ status }) => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "status-pending";
      case "ongoing":
        return "status-ongoing";
      case "done":
        return "status-done";
      case "new":
        return "status-new";
      default:
        return "";
    }
  };

  return (
    <button className={`status-button ${getStatusClass(status)}`}>
      {status}
    </button>
  );
};

export default EnquiryDashboard;