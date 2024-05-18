import ContrastIcon from '@mui/icons-material/Contrast';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from "react-redux";
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect } from 'react';

const FooterComponent = ({settings}) => {
    const dispatch = useDispatch();

    const handleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' })
        window.location.reload();
    };
    const handleGit = () => window.open(settings.githubUrl, '_blank');
    const handleYt = () => window.open(settings.ytUrl, '_blank');

    if (settings === undefined) return (<div>Loading...</div>);
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <IconButton onClick={handleGit}>
                            <GitHubIcon />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton onClick={handleYt}>
                            <YouTubeIcon />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton onClick={handleTheme}><ContrastIcon /></IconButton>
                    </li>
                </ul>
            </nav>
            <p className='last'>Made with <FavoriteIcon color='secondary' /> by <Link href={settings.authorUrl} target='_blank'>{settings.author}</Link></p>
        </footer>
    );
}

export default FooterComponent;