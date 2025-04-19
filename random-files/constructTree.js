const menu = {
    type: 'title',
    text: 'Menu',
    children: [
        {
            type: 'title',
            text: 'Works of George Macdonald',
        },
        {
            type:     'link',
            href:     '/books',
            text:     'Books',
            children: [
                {
                    type: 'link',
                    href: '/books/sir-gibbie',
                    text: 'Sir Gibbie',
                },
                {
                    type: 'link',
                    href: '/books/at-the-back-of-the-north-wind',
                    text: 'At the Back of the North Wind',
                },
                {
                    type: 'link',
                    href: '/books/the-princess-and-the-goblin',
                    text: 'The Princess and the Goblin',
                },
            ]
        },
        {
            type: 'link',
            href: '/poetry',
            text: 'Poems',
        },
        {
            type: 'link',
            href: '/essays',
            text: 'Essays',
            children: [
                {
                    type: 'link',
                    href: '/essays/the-fantastic-imagination',
                    text: 'The Fantastic Imagination',
                },
                {
                    type: 'link',
                    href: '/essays/the-new-name',
                    text: 'The New Name',
                },
            ]
        },
        {
            type: 'title',
            text: 'Our Community',
        },
        {
            type: 'link',
            href: '/about',
            text: 'About us',
            children: [
                {
                    type: 'link',
                    href: '/about/membership',
                    text: 'Community membership',
                },
                {
                    type: 'link',
                    href: '/about/sponsorship',
                    text: 'Community sponsorship',
                    children: [
                        {
                            type: 'link',
                            href: '/about/sponsorship/patreon',
                            text: 'Our Patreon',
                        },
                        {
                            type: 'link',
                            href: '/about/sponsorship/endowments',
                            text: 'Endowments',
                        },
                    ]
                },
            ]
        },
        {
            type: 'link',
            href: '/forum',
            text: 'Forum',
        },
        {
            type: 'link',
            href: 'https://www.facebook.com/groups/GeorgeMacDonaldCommunity/',
            text: 'Facebook Group',
        },
    ]
};

let titleElement = '';
let constructTree = function(menuObj) {
    if (menuObj.type === "title") {
        titleElement += `<h3>${menuObj.text}</h3>`;
        

        if (menuObj.children !== undefined) {
            titleElement += '<ul>';
            for (let obj in menuObj.children) {
                constructTree(menuObj.children[obj]);
            }
            titleElement += '</ul>';
        }
    }

    if (menuObj.type === "link") {
        titleElement += `<li><a href='${menuObj.href}' >${menuObj.text}</a></li>`;
        if (menuObj.children !== undefined) {
            titleElement += '<ul>';
            for (let obj in menuObj.children) {
                constructTree(menuObj.children[obj]);
            }
            titleElement += '</ul>';
        }

    }
}

constructTree(menu);
console.log(titleElement);