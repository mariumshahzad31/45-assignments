
let Guest_List :string[] = ['Imran Khan','Nawaz Sharif','Asif Ali Zardari'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

let absent_Guest :string = 'Imran Khan' ;
let new_Guest :string = 'Kamran Tessori' ;
Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

// console.log(`Mr. ${absent_Guest} is not coming to the party.`);
// console.log('Good News! We find Big Table So we are inviting 3 more guests.')

// add 3 guest in array.
Guest_List.unshift('Sir Zia Khan') ;
Guest_List.splice(2 , 0 , 'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');

// print guest.
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

// appology message for not inviting
console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');

// remove guest.
while(Guest_List.length > 2){
   let remove_Guest = Guest_List.pop();
   console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
}
Guest_List.splice(0, 2);
console.log(Guest_List);