import React from 'react';
import {render, screen} from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('Header', () => {
    it('should display a logo', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <Header />
            </Router>
        );
        const logo = screen.getByRole('img', {
            name: /initial logo/i
          });
        expect(logo).toBeInTheDocument();
    });

    it('should display an introduction', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <Header />
            </Router>
        );
        const hi = screen.getByRole('heading', {
            name: /hi, i'm/i
          })
        const name = screen.getByRole('heading', {
            name: /eric berglund/i
          })
          
        expect(hi).toBeInTheDocument();
        expect(name).toBeInTheDocument();
    });

    it('should display my role', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <Header />
            </Router>
        );
        const role = screen.getByRole('heading', {
            name: /and i'm a frontend software engineer/i
          })
          
        expect(role).toBeInTheDocument();
    });

    it('should display contact button', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <Header />
            </Router>
        );
        const contact = screen.getByRole('link', {
            name: /contact/i
          })
          
        expect(contact).toBeInTheDocument();
    });

    it('should display projects button', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <Header />
            </Router>
        );
        const projects = screen.getByRole('link', {
            name: /projects/i
          })
          
        expect(projects).toBeInTheDocument();
    });

    it('should display resume button', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <Header />
            </Router>
        );
        const resume = screen.getByRole('link', {
            name: /resume/i
          })
          
        expect(resume).toBeInTheDocument();
    });

    it('should display blog button', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <Header />
            </Router>
        );
        const blog = screen.getByRole('link', {
            name: /blog/i
          })
          
        expect(blog).toBeInTheDocument();
    });
    
});