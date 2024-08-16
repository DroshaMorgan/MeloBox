import { memo } from 'react';
import { NavLink } from '@/components/nav/NavLink';

export const NavSide = memo(() => {
    return (
        <header className="fixed top-0 flex h-full w-16 shrink-0 flex-col border-r bg-secondary">
            <NavLink name='MLE' path='/' />
            <NavLink name='HM' path='/home' />
        </header>
    );
});