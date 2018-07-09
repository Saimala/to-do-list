angular.module("todolist",[])
.controller("ctrl",ctrl)
function ctrl($scope){
    $scope.arr=[];
    $scope.run=function()
    {
   $scope.arr.push($scope.todo);
   $scope.todo='';
    console.log($scope.arr);
    }
}
