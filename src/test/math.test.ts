import Math from "../main"



describe('Math Unit Test',()=>{
    test('PI should be 3.141592653589793',()=>{
        let PI = 3.141592653589793;
        expect(Math.PI).toBe(PI);
    })

    test('round() should round PI into 3',()=>{
        expect(Math.round(Math.PI)).toBe(3);
    })

})