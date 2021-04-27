import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import matchMediaPolyfill from 'mq-polyfill'
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

describe('navbar web test', () => {
  beforeEach(() => window.resizeTo(1024, 780))

  describe('navbar homepage test', () => {
    beforeEach(() =>
      render(provideTheme(<Navbar page="home" />), { wrapper: MemoryRouter })
    )

    test('login button should be rendered', () => {
      expect(screen.getByText(/login/i)).toBeInTheDocument()
    })

    test('logo should be visible', () => {
      expect(screen.getByText(/felt teachers/i)).toBeInTheDocument()
    })

    test('profile image should not be visible', () => {
      expect(screen.queryByTestId('profile-avatar')).toBeNull()
    })

    test('menu icon should not be visible', () => {
      expect(screen.queryByTestId(/menu-icon/i)).toBeNull()
    })
  })

  describe('navbar profile tests', () => {
    beforeEach(() =>
      render(provideTheme(<Navbar page="profile" />), { wrapper: MemoryRouter })
    )

    test('login button should not be rendered', () => {
      expect(screen.queryByText(/login/i)).toBeNull()
    })

    test('logo should be visible', () => {
      expect(screen.getByText(/felt teachers/i)).toBeInTheDocument()
    })

    test('profile image should be visible', () => {
      expect(screen.getByTestId('profile-avatar')).toBeInTheDocument()
    })

    test('menu icon should not be visible', () => {
      expect(screen.queryByTestId(/menu-icon/i)).toBeNull()
    })
  })

  describe('navbar others test', () => {
    beforeEach(() =>
      render(provideTheme(<Navbar page="none" />), { wrapper: MemoryRouter })
    )

    test('login button should not be rendered', () => {
      expect(screen.queryByText(/login/i)).toBeNull()
    })

    test('logo should be visible', () => {
      expect(screen.getByText(/felt teachers/i)).toBeInTheDocument()
    })

    test('profile image should not be visible', () => {
      expect(screen.queryByTestId('profile-avatar')).toBeNull()
    })

    test('menu icon should not be visible', () => {
      expect(screen.queryByTestId(/menu-icon/i)).toBeNull()
    })
  })
})
