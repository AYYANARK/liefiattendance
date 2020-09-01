import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OFFICER LOGIN';
  
  showStaffs;
  schoolList = [{'id':'1','name':'Government School','location':'Chennai'},{'id':'2','name':'Nellaiyappar School','location':'Tirunelveli'}];
  schoolDetails =[{'name':'Government School','address':'2/48A,Main Street,Pallavakkam','city':'Chennai','state':'TamilNadu','email':'govschool@gmail.com','phone':'7550399789','pname':'Dr.A.Radhakrishnan','pmobile':'9443200217','pgmail':'krish@ghs.ac.in'},
  {'name':'Nellaiyappar School','address':'8/48A,Periyar Street,Palladam','city':'Tirunelveli','state':'TamilNadu','email':'nellaischool@gmail.com','phone':'8939568978','pname':'Dr.A.Ramakrishnan','pmobile':'9443200216','pgmail':'krish@nellai.ac.in'}];
  staffTestDetails=[{'sName':'Government School','name':'Sudha','email':'sudha@gov.ac.in'},{'sName':'Nellaiyappar School','name':'Varadhan','email':'vadhan@nellai.ac.in'},{'sName':'Government School','name':'Pooja','email':'pooja@gov.ac.in'}];
  attendanceDetails=[{'aname':'Government School','std':'I STANDARD'},{'aname':'Government School','std':'II STANDARD'},{'aname':'Government School','std':'III STANDARD'},{'aname':'Government School','std':'IV STANDARD'},{'aname':'Government School','std':'V STANDARD'}
  ,{'aname':'Government School','std':'VI STANDARD'},{'aname':'Government School','std':'VII STANDARD'},
  {'aname':'Government School','std':'VIII STANDARD'},{'aname':'Government School','std':'IX STANDARD'},{'aname':'Government School','std':'X STANDARD'},{'aname':'Government School','std':'XI STANDARD'},
  {'aname':'Government School','std':'XII Standard'},
  {'aname':'Nellaiyappar School','std':'I STANDARD'},{'aname':'Nellaiyappar School','std':'II STANDARD'},{'aname':'Nellaiyappar School','std':'III STANDARD'},{'aname':'Nellaiyappar School','std':'IV STANDARD'},{'aname':'Nellaiyappar School','std':'V STANDARD'},{'aname':'Nellaiyappar School','std':'VI STANDARD'},
  {'aname':'Nellaiyappar School','std':'VII STANDARD'},{'aname':'Nellaiyappar School','std':'VIII STANDARD'},{'aname':'Nellaiyappar School','std':'IX STANDARD'},{'aname':'Nellaiyappar School','std':'X STANDARD'}];
  tableheadAttendance = [ 'Roll No.', 'Name', 'Total No. Of Working Days','Days Present','Days Absent','Remarks'];
  studentdetails=[{'sname':'Government School','class':'I STANDARD','rollNo':'101','name':'Anusha','tnwd':'30','dp':'28','da':'2','remark':'Great','blood':'B +ve','address':'Kanyakumari','dob':'16/12/1999','contactNum':'8796541230'},
                  {'sname':'Government School','class':'I STANDARD','rollNo':'102','name':'Ashicka','tnwd':'30','dp':'26','da':'4','remark':'Good','blood':'O +ve','address':'Tambaram','dob':'1/2/1999','contactNum':'8745821230'},
                  {'sname':'Nellaiyappar School','class':'II STANDARD','rollNo':'101','name':'Athi','tnwd':'30','dp':'30','da':'0','remark':'Excellent','blood':'B +ve','address':'Tuticorin','dob':'1/12/1999','contactNum':'9745821230'},
                  {'sname':'Nellaiyappar School','class':'II STANDARD','rollNo':'102','name':'Benish','tnwd':'30','dp':'29','da':'1','remark':'Good','blood':'O +ve','address':'Coimbatore','dob':'11/3/1999','contactNum':'8740000030'},
                  {'sname':'Nellaiyappar School','class':'I STANDARD','rollNo':'101','name':'Ayyanar','tnwd':'30','dp':'20','da':'10','remark':'Poor','blood':'B +ve','address':'Theni','dob':'11/12/1999','contactNum':'8745821586'}];
  schoolSelected;
  attendanceSelected;


  staffDetails(schoolName) {

    console.log(schoolName);
    this.staffTestDetails.forEach(ele => {
      if(ele.sName===schoolName) {
        this.showStaffs=true;
      }
    })
    
  }
}
