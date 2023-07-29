import eat from './../assets/advantages/eat.svg';
import garbage from './../assets/advantages/garbage.svg';
import noMeat from './../assets/advantages/no-meat.svg';
import sprout from './../assets/advantages/sprout.svg';



const advantagesList = [
    {
      id: 0,
      type: 'farm',
      category:'Фермерские продукты',
      title: 'Еда намного вкуснее',
      description: 'Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники',
      image: eat,
    },
    {
      id: 1,
      type: 'shop',
      category:'Магазинные продукты',
      title: 'Просроченные продукты',
      description: 'Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара',
      image: garbage,
    },
    {
      id: 2,
      type: 'farm',
      category:'Фермерские продукты',
      title: 'Натуральные продукты',
      description: 'Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.',
      image: sprout,
    },
    {
      id: 3,
      type: 'shop',
      category:'Магазинные продукты',
      title: 'Некачественное мясо',
      description: 'Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов',
      image: noMeat,
    }
  ];
  
  export default advantagesList;