/* buildProfileCard(user) — Template Literals 
Given { name, title, company }, return a multiline string using template literal interpolation only.

Input:  
{ name: "Arif", title: "Developer", company: "Programming Hero" }
Output: 
"Arif\nDeveloper at Programming Hero"
 */

const buildProfileCard =(user)=>{
    return `${user.name},\n${user.title} at ${user.company}.`
}
console.log(buildProfileCard({ name: "Arif", title: "Developer", company: "Programming Hero" }))