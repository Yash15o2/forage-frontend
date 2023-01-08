import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

const ThemeDecorator = (props) => (
	<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default ThemeDecorator;
