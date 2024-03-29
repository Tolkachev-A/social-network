import {
  follow,
  InitialStateUserPageType,
  setCurrentPage,
  setPortionsNumber,
  setUsers,
  setUserSubscription,
  unFollow,
  usersSlice,
} from './usersSlice';

let initialStateUserPage = {} as InitialStateUserPageType;

beforeEach(() => {
  initialStateUserPage = {
    items: [
      {
        name: 'Anton',
        id: 25,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: 'Yo-Yo',
        followed: false,
      },
    ],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    portionsNumber: 1,
    error: null,
    userSubscription: [] as Array<number>,
  };
});

test('Adding array User', () => {
  const arrayUser = {
    items: [
      {
        name: 'Kety',
        id: 25295,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: 'Yo-Yo',
        followed: false,
      },
    ],
    totalCount: 2,
    error: null,
  };

  const newState = usersSlice(initialStateUserPage, setUsers(arrayUser));

  expect(newState.items).toHaveLength(1);
  expect(newState.items[0].status).toBe('Yo-Yo');
  expect(newState.items[0].name).toBe('Kety');
  expect(newState.items[0].id).toBe(25295);
});
test('Adding and deletions a user as a friend', () => {
  const newStateFollow = usersSlice(initialStateUserPage, follow(25));

  expect(newStateFollow.items).toHaveLength(1);
  expect(newStateFollow.items[0].followed).toBe(true);

  const newStateUnFollow = usersSlice(initialStateUserPage, unFollow(25));

  expect(newStateUnFollow.items).toHaveLength(1);
  expect(newStateUnFollow.items[0].followed).toBe(false);
});
test('Change current page and portion number', () => {
  const newStateCurrentPage = usersSlice(initialStateUserPage, setCurrentPage(2));

  expect(newStateCurrentPage.items).toHaveLength(1);
  expect(newStateCurrentPage.currentPage).toBe(2);

  const newStatePortionsNumber = usersSlice(newStateCurrentPage, setPortionsNumber(3));

  expect(newStatePortionsNumber.items).toHaveLength(1);
  expect(newStatePortionsNumber.currentPage).toBe(2);
  expect(newStatePortionsNumber.portionsNumber).toBe(3);
});
test('Adding and deletions User to the subscriber array', () => {
  const newState = usersSlice(
    initialStateUserPage,
    setUserSubscription({ userId: 2, isFollowing: true }),
  );

  expect(newState.items.length).toBe(1);
  expect(newState.userSubscription).toHaveLength(1);
  expect(newState.userSubscription[0]).toBe(2);

  const newStateDeletionsUser = usersSlice(
    newState,
    setUserSubscription({ userId: 2, isFollowing: false }),
  );

  expect(newStateDeletionsUser.items).toHaveLength(1);
  expect(newStateDeletionsUser.userSubscription).toHaveLength(0);
  expect(newStateDeletionsUser.userSubscription[0]).toBeUndefined();
});
