import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Counselor from './Dashboard/Counselor/Counselor';
import Admission from './Studmanager/Admission/Admission';
import Enquiry from './Studmanager/Enquiry/Enquiry';
import Batch from './Studmanager/Batch/Batch';
import New from './StudAttendance/New/New';
import Update from './StudAttendance/Update/Update';
import Daywise from './StudAttendance/Daywise/Daywise';
import Monthwise from './StudAttendance/Monthwise/Monthwise';
import Stud from './StudAttendance/Studentwise/Stud';
import Accounts from './Dashboard/Accounts/Accounts';
import Addresult from './Examresults/Addresult/Addresult';
import Updateresult from './Examresults/Updateresult/Updateresult';
import Performance from './Examresults/studperformance/Performance';
import Assignbatch from './Trainermanager/Assignbatch/Assignbatch';
import Dailyreporting from './Trainermanager/Dailyreporting/Dailyreporting';
import Trainerpay from './Trainermanager/Trainerpay/Trainerpay';
import Trainerwiseschedule from './Examresults/Trainerwiseschedule/Trainerwiseschedule';
import Daywiseschedule from './Examresults/Daywiseschedule/Daywiseschedule';
import Staffnew from './Staffattendance/New/Staffnew';
import Staffupdate from './Staffattendance/Update/Staffupdate';
import Staffdaywise from './Staffattendance/Daywise/Staffdaywise';
import Staffmonthwise from './Staffattendance/Monthwise/Staffmonthwise';
import Feesmanager from './Accounts/Feesmanager/Feesmanager';
import Receipt from './Accounts/Receipt/Receipt';
import Cheque from './Accounts/Cheque/Cheque';
import Payment from './Accounts/Payment/Payment';
import Studicard from './Printing/Studicard/Studicard';
import Certificate from './Printing/Certificate/Certificate';
import Empicard from './Printing/Empicard/Empicard';
import Send from './SMS/Send/Send';
import Setting from './SMS/Setting/Setting';
import Template from './SMS/Template/Template';
import Notification from './SMS/Notification/Notification';
import Email from './Email/Email';
import Account_head from './Master/Account_head/Account_head';
import Course from './Master/Course/Course';
import Masterbatch from './Master/Batch/Batch';
import Branch from './Master/Branch/Branch';
import Employee from './Master/Employee/Employee';
import Role from './Master/Role/Role';
import Bank from './Master/Bank/Bank';
import Follow_up_mode from './Master/Follow_up_mode/Follow_up_mode';
import Lead_source from './Master/Lead_source/Lead_source';
import Exam from './Master/Exam/Exam';
import Receipt_voucher from './Reports/Receipt_voucher/Receipt_voucher';
import Payment_voucher from './Reports/Payment_voucher/Payment_voucher';
import Receipt_chq from './Reports/Receipt_chq/Receipt_chq';
import Payment_chq from './Reports/Payment_chq/Payment_chq';
import Fees_chq from './Reports/Fees_chq/Fees_chq';
import Transaction_log from './Reports/Transaction_log/Transaction_log';
import Day_book from './Reports/Day_book/Day_book';
import Period_history from './Reports/Period_history/Period_history';
import Fees_collection from './Reports/Fees_collection/Fees_collection';
import Fees_chq_bounce from './Reports/Fees_chq_bounce/Fees_chq_bounce';
import Voucher_chq_Bounce from './Reports/Voucher_chq_Bounce/Voucher_chq_Bounce';
import Head_wise_details from './Reports/Head_wise_details/Head_wise_details';
import Discount_summary from './Reports/Discount_summary/Discount_summary';
import Online_Payment from './Reports/Online_Payment/Online_Payment';
import Online_receipt from './Reports/Online_receipt/Online_receipt';
import Course_wise_sale from './Reports/Course_wise_sale/Course_wise_sale';
import Certificate_issued from './Reports/Certificate_issued/Certificate_issued';
import Source_wise_leads from './Reports/Source_wise_leads/Source_wise_leads';
import Counselor_wise_sale from './Reports/Counselor_wise_sale/Counselor_wise_sale';
import Account_ledger from './Reports/Account_ledger/Account_ledger';
import Batch_wise_collection from './Reports/Batch_wise_collection/Batch_wise_collection';


export default class App extends Component {
  render() {
    return (
     
<BrowserRouter>
<div>
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/Accounts" exact component={Accounts} />
    <Route path="/Counselor" exact component={Counselor} />
    <Route path="/FirstSnap" exact component={Enquiry} />
    <Route path="/Admission" exact component={Admission} />
    <Route path="/Batch" exact component={Batch} />
    <Route path="/New" exact component={New} />
    <Route path="/Update" exact component={Update} />
    <Route path="/Daywise" exact component={Daywise} />
    <Route path="/Monthwise" exact component={Monthwise} />
    <Route path="/Studwise" exact component={Stud} />
    <Route path="/Addresult" exact component={Addresult} />
    <Route path="/Updateresult" exact component={Updateresult} />
    <Route path="/Performance" exact component={Performance} />
    <Route path="/Assignbatch" exact component={Assignbatch} />
    <Route path="/Dailyreporting" exact component={Dailyreporting} />
    <Route path="/Trainerpay" exact component={Trainerpay} />
    <Route path="/Trainerwiseschedule" exact component={Trainerwiseschedule} />
    <Route path="/Daywiseschedule" exact component={Daywiseschedule} />
    <Route path="/Staffnew" exact component={Staffnew} />
    <Route path="/Staffupdate" exact component={Staffupdate} />
    <Route path="/Staffdaywise" exact component={Staffdaywise} />
    <Route path="/Staffmonthwise" exact component={Staffmonthwise} />
    <Route path="/Feesmanager" exact component={Feesmanager} />
    <Route path="/Receipt" exact component={Receipt} />
    <Route path="/Cheque" exact component={Cheque} />
    <Route path="/Payment" exact component={Payment} />
    <Route path="/Studicard" exact component={Studicard} />
    <Route path="/Certificate" exact component={Certificate} />
    <Route path="/Empicard" exact component={Empicard} />
    <Route path="/Send" exact component={Send} />
    <Route path="/Notification" exact component={Notification} />
    <Route path="/Setting" exact component={Setting} />
    <Route path="/Template" exact component={Template} />
    <Route path="/Email" exact component={Email} />
    <Route path="/Account_head" exact component={Account_head} />
    <Route path="/Course" exact component={Course} />
    <Route path="/Masterbatch" exact component={Masterbatch} />
    <Route path="/Branch" exact component={Branch} />
    <Route path="/Employee" exact component={Employee} />
    <Route path="/Role" exact component={Role} />
    <Route path="/Bank" exact component={Bank} />
    <Route path="/Follow_up_mode" exact component={Follow_up_mode} />
    <Route path="/Lead_source" exact component={Lead_source} />
    <Route path="/Document" exact component={Document} />
    <Route path="/Exam" exact component={Exam} />
    <Route path="/Receipt_voucher" exact component={Receipt_voucher} />
    <Route path="/Payment_voucher" exact component={Payment_voucher} />
    <Route path="/Receipt_chq" exact component={Receipt_chq} />
    <Route path="/Fees_chq" exact component={Fees_chq} />
    <Route path="/Payment_chq" exact component={Payment_chq} />
    <Route path="/Transaction_log" exact component={Transaction_log} />
    <Route path="/Day_book" exact component={Day_book} />
    <Route path="/Period_history" exact component={Period_history} />
    <Route path="/Fees_collection" exact component={Fees_collection} />
    <Route path="/Fees_chq_bounce" exact component={Fees_chq_bounce} />
    <Route path="/Voucher_chq_Bounce" exact component={Voucher_chq_Bounce} />
    <Route path="/Head_wise_details" exact component={Head_wise_details} />
    <Route path="/Discount_summary" exact component={Discount_summary} />
    <Route path="/Online_Payment" exact component={Online_Payment} />
    <Route path="/Online_receipt" exact component={Online_receipt} />
    <Route path="/Course_wise_sale" exact component={Course_wise_sale} />
    <Route path="/Certificate_issued" exact component={Certificate_issued} />
    <Route path="/Source_wise_leads" exact component={Source_wise_leads} />
    <Route path="/Counselor_wise_sale" exact component={Counselor_wise_sale} />
    <Route path="/Account_ledger" exact component={Account_ledger} />
    <Route path="/Batch_wise_collection" exact component={Batch_wise_collection} />
  </Switch>
</div>
</BrowserRouter>
    );
  }
}
