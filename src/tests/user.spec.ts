import User from '@models/user';

test('it should be ok', () => {
  const user = new User();
  user.email = 'email@domain.com';

  expect(user.email).toEqual('email@domain.com');
});
