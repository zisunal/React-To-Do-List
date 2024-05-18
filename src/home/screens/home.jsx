import FormComponent from '../components/form';
import ListComponent from '../components/list';
import FooterComponent from '../components/footer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
    const settings = useSelector(store => store.settings);

    useEffect(() => {
        document.title = settings.title;
    }, []);
    useEffect(() => {
        if (settings.theme === 'dark') {
            import('../css/home-dark.css');
        } else {
            import('../css/home.css');
        }
    }, [settings.theme]);

    return (
        <div className="home">
            <FormComponent />
            <ListComponent theme={settings.theme} />
            <FooterComponent settings={settings} />
        </div>
    )
}