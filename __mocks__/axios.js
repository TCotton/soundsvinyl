const mockAxios = jest.genMockFromModule('axios');

// this is the key to fix the axios.create() undefined error!
mockAxios.create = jest.fn(() => mockAxios);
mockAxios.get = jest.fn(() => Promise.resolve({ data: null }));
mockAxios.post = jest.fn(() => Promise.resolve({ data: null }));

export default mockAxios;
