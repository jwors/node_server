const allRoles = {
	user: [],
	admn: ['getUsers', 'manageUsers']
}

const role = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

export {
	role,
	roleRights
}

// 用于配置权限