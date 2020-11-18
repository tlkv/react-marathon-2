import Url from 'url';

function req() {
    console.log('"req test ');
    const uri = Url.format({
        protocol: 'https',
        host: 'zarmarathon.ru',
        query: {
            name: 'Zar'
        }
    });
    console.log('#uri ', uri);

}

export default req;