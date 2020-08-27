myApp.controller("studentController", function($scope) {
    $scope.student = {
       firstName: "",
       lastName: "",
       
       subjects:[
          {name:'Physics',marks:70},
          {name:'Chemistry',marks:80},
          {name:'Math',marks:65},
          {name:'English',marks:75},
          {name:'Hindi',marks:67}
       ],
       fullName: function() {
          var studentObject;
          studentObject = $scope.student;
          return studentObject.firstName + " " + studentObject.lastName;
       },
       courses:[
         {name:'bca',fee:20000},
         {name:'mca',fee:50000},
         {name:'ca',fee:100000},
         {name:'msc',fee:5000},
         {name:'ba',fee:3000}
      ],
    };
 });