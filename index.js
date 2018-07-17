
const h = React.createElement;


let kebabs = [
    'chicken hearts',
    'marinated mushrroms',
    'beef'
];

// let items = kebabs.map((k) => {
//     let vItem = h('li', null, k);
//     return vItem;
// }); 

// let title = h('h1', null, 'kebabs!');
// let item = h('li', null, 'chicken hearts');
// let item2 = h('li', null, 'marinated mushrooms');
// let list = h('ul', null, items);
let main = h('div', null, [
    h('h1', {className: 'header'}, 'kebabs!'),
    h('ul', null, kebabs.map((k) => h('li', null, k))),
        // let vItem = h('li', null, k);
        // return vItem;
        h('img', { src: 'heart.jpg', className: 'img' })
    ])

    let main2 = <div>
        <h1 className='header'>Kebabs!></h1>
        <ul>
            {kebabs.map((k) => <li>{k}</li>)}
            </ul>
            <img src='img.jpg' className='kebab-image' />
        </div>
ReactDOM.render(main, document.querySelector('[data-root'));

