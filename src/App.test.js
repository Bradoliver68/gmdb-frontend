import React from 'react';
import {shallow } from 'enzyme';
import App from './App';

/*test('isMovie Displayed() see if Movies are displayed on the page', () => {

  const appWrapper = shallow(<App />) //Create an App wrapper    
  //const movieTitles = appWrapper.find(Movies)
  expect(appWrapper.state().isMovieDisplayed).toBeTruthy() 
  })*/
 
  
  function flushPromises() {
    return new Promise(resolve => setImmediate(resolve));
  }
  
  describe('App', () => {
    test('renders without crashing', () => {
      const wrapper = shallow(<App />)
  
      expect(wrapper.length).toBe(1)
    })
  
    test('displays the movie title', async () => {
      //SETUP
      const movieTitle = "Guardians of the Galaxy Vol. 2"
      const fetchMock = jest.fn()
      const oldFetch = global.fetch
      global.fetch = fetchMock
      fetchMock.mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve({
              title: movieTitle
            })
          }
        })
      })
  
      const wrapper = await shallow(<App />)
      //EXERCISE
      await wrapper.update()
      
      //ASSERT
      expect(fetchMock).toHaveBeenCalledWith("http://localhost:3001/movies")
      expect(wrapper.state('title')).toBe(movieTitle)
      expect(wrapper.text()).toBe(movieTitle)
  
      //TEARDOWN
      global.fetch = oldFetch
    })
    /*test('displays "Unable to load books" when API responds with status 500', async () => {
      //Setup
      const expectedStatusCode = 500
      const expectedErrorMessage = 'Unable to load books'
      const fetchMock = jest.fn()
      const oldFetch = global.fetch
      global.fetch = fetchMock
      fetchMock.mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.reject({
              status: expectedStatusCode
            })
          }
        })
      })
      //Exercise
      const wrapper = await shallow(<FavoriteBook />)
  
      await wrapper.update()
      //Assert
      expect(fetchMock).toHaveBeenCalledWith("https://www.anapioficeandfire.com/api/books/1")
      expect(wrapper.state('error')).toBe(expectedErrorMessage)
      expect(wrapper.text()).toBe(expectedErrorMessage)
  
      //Teardown
      global.fetch = oldFetch
    })*/
  
  
    test('AWAITS ALL ASYNC behavior and displays the movie title', async () => {
      //SETUP
      const movieTitle = "Guardians of the Galaxy Vol. 2"
      const fetchMock = jest.fn()
      const oldFetch = global.fetch
      global.fetch = fetchMock
      fetchMock.mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve({
              title: movieTitle
            })
          }
        })
      })
  
      const wrapper = shallow(<App />)
  
      await flushPromises()
  
      //EXERCISE
      wrapper.update()
  
      //ASSERT
      expect(fetchMock).toHaveBeenCalledWith("http://localhost:3001/movies")
      expect(wrapper.state('title')).toBe(movieTitle)
      expect(wrapper.text()).toBe(movieTitle)
  
      //TEARDOWN
      global.fetch = oldFetch
    })
  })