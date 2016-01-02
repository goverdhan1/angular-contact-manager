'use strict';

app.factory("contactManagerServices",[function(){

	return{
    
    // Method to retrive contacts 
    getContacts:function(){

     var contacts = [
     {
      id: 1,
      name : 'Terrence S. Hatfield',
      tel: '651-603-1723',
      email: 'TerrenceSHatfield@rhyta.com',
      image: 1
    },
    {
      id: 2,
      name : 'Chris M. Manning',
      tel: '513-307-5859',
      email: 'ChrisMManning@dayrep.com',
      image: 2
    },
    {
      id: 3,
      name : 'Ricky M. Digiacomo',
      tel: '918-774-0199',
      email: 'RickyMDigiacomo@teleworm.us',
      image: 3
    },
    {
      id: 4,
      name : 'Michael K. Bayne',
      tel: '702-989-5145',
      email: 'MichaelKBayne@rhyta.com',
      image: 4
    },
    {
      id: 5,
      name : 'John I. Wilson',
      tel: '318-292-6700',
      email: 'JohnIWilson@dayrep.com',
      image: 5
    },
    {
      id: 6,
      name : 'Rodolfo P. Robinett',
      tel: '803-557-9815',
      email: 'RodolfoPRobinett@jourrapide.com',
      image: 6
    }
    ];
    return contacts; 
  }

}
}])