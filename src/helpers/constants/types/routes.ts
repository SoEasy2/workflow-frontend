import React from 'react';
export interface IRoute {
    path: string;
    component: React.ReactNode;
    exact?: boolean;
}