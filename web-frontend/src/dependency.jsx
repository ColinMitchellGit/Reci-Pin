
export default function buildPath(route)
{
    const app_name = 'recipin';

    if (process.env.NODE_ENV === 'production')
        return 'https://' + app_name + '.onrender.com/' + route;
    else
        return 'http://localhost:5000/' + route;
}