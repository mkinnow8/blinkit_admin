import { GoogleSignin } from '@react-native-google-signin/google-signin';

const GOOGLE_WEB_CLIENT_ID = '89678336157-0celitijsigvnk67u5qpdotgl7tgla8g.apps.googleusercontent.com';
const GOOGLE_ANDROID_CLIENT_ID = '89678336157-7v4ieet4ermdpvtceqnco31n64tpmm7v.apps.googleusercontent.com';



GoogleSignin.configure({
	webClientId: GOOGLE_WEB_CLIENT_ID,
	androidClientId: GOOGLE_ANDROID_CLIENT_ID,
	scopes: ['profile', 'email'],
});

export const GoogleLogin = async () => {
	await GoogleSignin.hasPlayServices();
	const userInfo = await GoogleSignin.signIn();
	return userInfo;
};

export async function handleGoogleLogout() {
	console.log("Logging OUt");
	try {
		await GoogleSignin.signOut();
		// Perform additional cleanup and logout operations.
	} catch (error) {
		console.log('Google Sign-Out Error: ', error);
	}
}