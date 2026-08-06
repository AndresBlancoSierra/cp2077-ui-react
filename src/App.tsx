import { MenuProvider, useMenu } from './router/MenuRouter';
import { HubMenu } from './screens/HubMenu';
import { CharacterScreen } from './screens/CharacterScreen';
import { CyberwareScreen } from './screens/CyberwareScreen';
import { StatsScreen } from './screens/StatsScreen';

function Router() {
  const { route } = useMenu();
  switch (route) {
    case '/character': return <CharacterScreen />;
    case '/cyberware': return <CyberwareScreen screenType="Inventory" />;
    case '/stats': return <StatsScreen />;
    default: return <HubMenu />;
  }
}

export default function App() {
  return (
    <MenuProvider>
      <Router />
    </MenuProvider>
  );
}
