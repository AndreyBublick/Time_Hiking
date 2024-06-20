import { Conditions, ConditionsAC } from "./Conditions-reduce";





it('name',()=>{

    const stateTest = {

        parametrs:{
            isNotCloseBody:true,
        },
        
    
    };
    
    
    const ac = ConditionsAC.toggleCloseBody(false);
    
    const newState = Conditions(stateTest,ac);
    
    
    console.log(newState.parametrs.isNotCloseBody===false);

    expect(newState.parametrs.isNotCloseBody).toBe(false);

});
