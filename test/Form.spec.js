import Myform from '../index';

describe('Testing Form Helper',  () => {



    it('it works', () => {
        expect(3+2).toEqual(5)
    })

    it('it look up', () => {
        let  p = new Myform();
        p.error = {name: 'name', message: 'This is the field is required'};

        expect(p.hasError('name')).toEqual(true);

    })
})