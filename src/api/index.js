import axios from 'axios';

export const getList = async (  dateStart='', dateEnd='', inOut='' ) => {
    try{
        let tokenAuthorization = 'testtoken';
        let url = `https://api.skilla.ru/mango/getList`;
        
        const respones = await axios.post(url, {}, {
            headers: {
                'Authorization': `Bearer ${tokenAuthorization}`,
            }
        }).then((res => res.data));
        return respones;

    }catch(e){
       console.error(e)
    };
    
}