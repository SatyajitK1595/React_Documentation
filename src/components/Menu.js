import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Accordion, AccordionItem } from 'react-light-accordion';
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
        <div>
          <Accordion atomic={true}>

          <AccordionItem title="Dashboard">
            <Link to="/Accounts" className="dropdown-item">Accounts</Link>
            <Link to="/Counselor" className="dropdown-item">Counselor</Link>
          </AccordionItem>

          <AccordionItem title="Student Manager">
            <Link to="/FirstSnap" className="dropdown-item">Enquiry</Link>
            <Link to="/Admission" className="dropdown-item">Admission</Link>
            <Link to="/Batch" className="dropdown-item">Assign Batch</Link>
          </AccordionItem>

          <AccordionItem title="Stud. Attendance">
            <Link to="/New" className="dropdown-item">New</Link>
            <Link to="/Update" className="dropdown-item">Update Attendance</Link>
            <Link to="/Daywise" className="dropdown-item">Day Wise</Link>
            <Link to="/Monthwise" className="dropdown-item">Month wise</Link>
            <Link to="/Studwise" className="dropdown-item">Student Wise</Link>
          </AccordionItem>

          <AccordionItem title="Exam Results">
            <Link to="/Addresult" className="dropdown-item">Add Results</Link>
            <Link to="/Updateresult" className="dropdown-item">Update Results</Link>
            <Link to="/Performance" className="dropdown-item">Stud. Performance</Link>
          </AccordionItem>

          <AccordionItem title="Trainer Manager">
            <Link to="/Assignbatch" className="dropdown-item">Assign Batch</Link>
            <Link to="/Dailyreporting" className="dropdown-item">Daily Reporting</Link>
            <Link to="/Trainerpay" className="dropdown-item">Trainer Payment</Link>
            <Link to="/Trainerwiseschedule" className="dropdown-item">Trainer wise Schedule</Link>
            <Link to="/Daywiseschedule" className="dropdown-item">Day wise Schedule</Link>
          </AccordionItem>

          <AccordionItem title="Staff Attendance">
            <Link to="/Staffnew" className="dropdown-item">New</Link>
            <Link to="/Staffupdate" className="dropdown-item">Update Attendance</Link>
            <Link to="/Staffdaywise" className="dropdown-item">Day Wise</Link>
            <Link to="/Staffmonthwise" className="dropdown-item">Month wise</Link>
          </AccordionItem>

          <AccordionItem title="Accounts">
            <Link to="/Feesmanager" className="dropdown-item">Fees Manager</Link>
            <Link to="/Receipt" className="dropdown-item">Receipt</Link>
            <Link to="/Payment" className="dropdown-item">Payment</Link>
            <Link to="/Cheque" className="dropdown-item">Cheque Manager</Link>
          </AccordionItem>

          <AccordionItem title="Printing">
            <Link to="/Studicard" className="dropdown-item">Student I-Card</Link>
            <Link to="/Certificate" className="dropdown-item">Certificate</Link>
            <Link to="/Empicard" className="dropdown-item">Employee I-Card</Link>
          </AccordionItem>

          <AccordionItem title="SMS">
            <Link to="/Send" className="dropdown-item">Send SMS</Link>
            <Link to="/Template" className="dropdown-item">SMS Template</Link>
            <Link to="/Setting" className="dropdown-item">SMS Settings</Link>
            <Link to="/Notification" className="dropdown-item">Notification Settings</Link>
          </AccordionItem>

          <AccordionItem title="Email">
            <Link to="/Email" className="dropdown-item">Email Settings</Link>
          </AccordionItem>

          <AccordionItem title="Master">
            <Link to="/Course" className="dropdown-item">Course</Link>
            <Link to="/Account_head" className="dropdown-item">Account Head</Link>
            <Link to="/Masterbatch" className="dropdown-item">Batch</Link>
            <Link to="/Branch" className="dropdown-item">Branch</Link>
            <Link to="/Employee" className="dropdown-item">Employee</Link>
            <Link to="/Role" className="dropdown-item">Role</Link>
            <Link to="/Bank" className="dropdown-item">Bank</Link>
            <Link to="/Follow_up_mode" className="dropdown-item">Follow-up Mode</Link>
            <Link to="/Lead_source" className="dropdown-item">Lead Source</Link>
            <Link to="/Document" className="dropdown-item">Document</Link>
            <Link to="/Exam" className="dropdown-item">Exam</Link>
          </AccordionItem>
      
          <AccordionItem title="Reports">
            <Link to="/Receipt_voucher" className="dropdown-item">Reciept Voucher</Link>
            <Link to="/Payment_voucher" className="dropdown-item">Payment Voucher</Link>
            <Link to="/Receipt_chq" className="dropdown-item">Reciept Chq.</Link>
            <Link to="/Payment_chq" className="dropdown-item">Payment Chq.</Link>
            <Link to="/Fees_chq" className="dropdown-item">Fees Chq.</Link>
            <Link to="/Transaction_log" className="dropdown-item">Transaction Log</Link>
            <Link to="/Day_book" className="dropdown-item">Day Book</Link>
            <Link to="/Period_history" className="dropdown-item">Period History</Link>
            <Link to="/Fees_collection" className="dropdown-item">Fees Collection</Link>
            <Link to="/Fees_chq_bounce" className="dropdown-item">Fee Chq. Bounce</Link>
            <Link to="/Voucher_chq_Bounce" className="dropdown-item">Voucher Chq. Bounce</Link>
            <Link to="/Head_wise_details" className="dropdown-item">Head Wise Details</Link>
            <Link to="/Discount_summary" className="dropdown-item">Discount Summary</Link>
            <Link to="/Online_Payment" className="dropdown-item">Online Payment</Link>
            <Link to="/Online_receipt" className="dropdown-item">Online Reciept</Link>
            <Link to="/Course_wise_sale" className="dropdown-item">Course Wise Sales</Link>
            <Link to="/Certificate_issued" className="dropdown-item">Certificate Issued</Link>
            <Link to="/Source_wise_leads" className="dropdown-item">Source wise Leads</Link>
            <Link to="/Counselor_wise_sale" className="dropdown-item">Counselor wise Sale</Link>
            <Link to="/Account_ledger" className="dropdown-item">Account Ledger</Link>
            <Link to="/Batch_wise_collection" className="dropdown-item">Batch wise Collection</Link>
          </AccordionItem>
          </Accordion>
        </div>
      
    );
  }
}
export default Menu;