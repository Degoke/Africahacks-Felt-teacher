import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import matchMediaPolyfill from 'mq-polyfill'
import userEvent from '@testing-library/user-event'
import Navbar from '../../components/navbar'
import { provideTheme } from '../../setupTests'

beforeAll(() => {
  matchMediaPolyfill(window)
  window.resizeTo = function resizeTo(width, height) {
    Object.assign(this, {
      innerWidth: width,
      innerHeight: height,
      outerWidth: width,
      outerHeight: height,
    }).dispatchEvent(new this.Event('resize'))
  }
})

describe('navbar mobile test', () => {
  beforeEach(() => window.resizeTo(360, 780))

  describe('home page test', () => {
    beforeEach(() =>
      render(provideTheme(<Navbar page="home" />), {
        wrapper: MemoryRouter,
      })
    )

    test('logo should be visible', () => {
      expect(screen.getByText(/felt teachers/i)).toBeInTheDocument()
    })

    test('menu icon should be visible', () => {
      expect(screen.getByTestId(/menu-icon/i)).toBeInTheDocument()
    })

    test('login button should be rendered on click of menu', () => {
      userEvent.click(screen.getByTestId(/menu-icon/i))
      expect(screen.getByText(/login/i)).toBeInTheDocument()
      expect(screen.queryByTestId('profile-avatar')).toBeNull()
    })
  })

  describe('profile page test', () => {
    beforeEach(() =>
      render(provideTheme(<Navbar page="profile" />), {
        wrapper: MemoryRouter,
      })
    )

    test('logo should be visible', () => {
      expect(screen.getByText(/felt teachers/i)).toBeInTheDocument()
    })

    test('menu icon should be visible', () => {
      expect(screen.getByTestId(/menu-icon/i)).toBeInTheDocument()
    })

    test('login button should not be rendered', () => {
      expect(screen.queryByText(/login/i)).toBeNull()
    })

    test('login button should not be rendered on click of menu', () => {
      userEvent.click(screen.getByTestId(/menu-icon/i))
      expect(screen.queryByText(/login/i)).toBeNull()
      expect(screen.getByTestId('profile-avatar')).toBeInTheDocument()
    })
  })
})
