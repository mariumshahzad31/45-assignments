
let Guest_List :string[] = ['Imran Khan','Nawaz Sharif','Asif Ali Zardari'];

let absent_Guest :string = 'Imran Khan' ;
let new_Guest :string = 'Kamran Tessori' ;
Guest_List[0] = new_Guest ;

//add 3 guest in array
Guest_List.unshift('Sir Zia Khan') ;
Guest_List.splice(2 , 0 , 'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');

// add 6 guest in array
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

//appology message
console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');

while(Guest_List.length > 2){
   let remove_Guest = Guest_List.pop();
   console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}

//2 guest
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
}

// removing guest
Guest_List.splice(0, 2);
console.log(Guest_List);
console.log('\n\nEpmty Array count:' + Guest_List.length);