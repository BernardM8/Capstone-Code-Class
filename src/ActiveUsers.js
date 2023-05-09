class ActiveUsers{
    
    
    //constructor (userlist){
    //    this.userlist = userlist;
    //}
    
    getUserList(){
        return this.userlist;
    }

    updateUserList(userlist){
        this.userlist = userlist;
    }
}
export default ActiveUsers