let basicAlert = true;

 export function reducer2 (state = basicAlert, action) {
  if(action.type === "close"){
    state = false
    return state
  } else {
    return state;
  }
}


let basicState =  [
  {id : 0, name : "Nike/dunk" , quan : 2, color: "red"},
  {id : 1, name : "adidas/superstar" , quan : 1, color: "black"},
  {id : 2, name : "Nike/force" , quan : 2, color: "red"},
  {id : 3, name : "Newbalance/992" , quan : 3, color: "navy"},
  {id : 4, name : "Nike/ambush" , quan : 2, color: "red"},
  {id : 5, name : "Nike/blazer" , quan : 2, color: "red"},
  {id : 6, name : "Converse/chucktailer" , quan : 1, color: "vintage"},
]

export function reducer(state = basicState, action) {
  if( action.type === "increase" ){
    let copy = [...basicState]
    copy[0].quan++;
    return copy
    
  } else if ( action.type === "decrease" ) {
    let copy = [...basicState]
    if(copy[0].quan >= 1){
      copy[0].quan--
    }
    return copy
  } else {
    return state
  }
}

