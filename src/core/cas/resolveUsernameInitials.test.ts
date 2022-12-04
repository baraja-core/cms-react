import { resolveUsernameInitials } from './resolveUsernameInitials';

describe('resolveUsernameInitialsL', () => {
  test('Simple casesL', () => {
    expect(resolveUsernameInitials('')).toEqual('?');
    expect(resolveUsernameInitials('    ')).toEqual('?');
    expect(resolveUsernameInitials('  aDmin  ')).toEqual('A');
    expect(resolveUsernameInitials('  aDmin ..__:. ?! ')).toEqual('A');
    expect(resolveUsernameInitials('admin')).toEqual('A');
    expect(resolveUsernameInitials('janbarasek')).toEqual('J');
    expect(resolveUsernameInitials('jan barasek')).toEqual('JB');
    expect(resolveUsernameInitials('mr. jan barasek')).toEqual('JB');
    expect(resolveUsernameInitials('mrs. jan barasek')).toEqual('JB');
    expect(resolveUsernameInitials('doc. jan barasek')).toEqual('JB');
    expect(resolveUsernameInitials('super jan barasek')).toEqual('SJB');
  });
});
