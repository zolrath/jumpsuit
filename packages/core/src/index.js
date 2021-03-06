import {
  Route,
  IndexRoute,
  Redirect,
  IndexRedirect,
  Link,
  IndexLink
} from 'react-router'

import Component from './component'
import Render, { Router } from './render'
import { State, Effect, Hook, Actions, StateDefaults } from 'jumpstate'
import Goto from './routing'
import { Middleware } from './reducer'

module.exports = {
  /* Core */
  Render,
  Component,
  State,
  Effect,
  Hook,
  Actions,

  /* React Router */
  Router,
  Route,
  IndexRoute,
  Redirect,
  IndexRedirect,
  Link,
  IndexLink,
  Goto,

  /* Redux */
  Middleware,

  /* Other */
  StateDefaults
}
