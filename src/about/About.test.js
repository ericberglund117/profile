import React from 'react';
import {render, screen} from '@testing-library/react';
import About from './About'

describe('About', () => {
    it('should display skills title', () => {
        render(
            <About />
        );
        const skillsTitle = screen.getByRole('heading', { name: /skills/i })
        expect(skillsTitle).toBeInTheDocument();
    });

    it('should display skills section', () => {
        render(
            <About />
        );
        const skills = screen.getByText(/frontend software developer skilled in javascript, html\/css, sass, styled components, react, react\-hooks, react\-router, redux, react\-redux hooks, typescript, salesforce \(apex, visualforce, soql, triggers, integrations, testing\), test driven development, jest, mocha\/chai, object oriented programing, travisci, heroku, webpack, babel, and fetch\/ajax api calls\./i)
        expect(skills).toBeInTheDocument();
    });

    it('should display About Me title', () => {
        render(
            <About />
        );
        const aboutMe = screen.getByRole('heading', { name: /about me/i })
        expect(aboutMe).toBeInTheDocument();
    });

    it('should display About Me section', () => {
        render(
            <About />
        );
        const aboutMeSection = screen.getByText(/former high school social studies teacher turned front\-end developer in denver, co\. i am a person who views any problem as an opportunity to learn, grow, and build connections\. as a 'forever student and teacher', my goal is to create\/update\/maintain software that can be used to advance a community or an individual based on their needs\. helping people has always been a passion and one i intend to continue pursuing\. thanks to my personal experiences, i am rooted in logical, empathetic, and collaborative tactics that can be used to solve countless problems\. give me a challenge and i'll respond with determination, enthusiasm, cooperation, patience, and a fun\-loving attitude\./i)
        expect(aboutMeSection).toBeInTheDocument();
    });
});