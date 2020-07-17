(function(){
'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController',function($scope){
    $scope.name="";
    $scope.result="";

    $scope.display=function()  {
      var disp = determine($scope.name);
      //$scope.result=disp;
      if(disp==0)
        $scope.result= "";
      else if(disp>0&&disp<4)
        $scope.result= "Enjoy!";
      else
        $scope.result= "Too much!!";
    };

    function determine(string){
      var count=0;
      string=string.trim();
      for(var i=0; i<string.length;i++){
        if(string.charAt(i)==',')
          count++;
        }
      return count;
    }
  });
})();
//browser-sync start --server --directory --files "**/*"/
