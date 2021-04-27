function main() {
    const N = parseInt(readLine(), 10);
    let firstNames = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');

        const firstName = firstNameEmailID[0];

        const emailID = firstNameEmailID[1];

        if(emailID.endsWith("@gmail.com"))
            firstNames.push(firstName);
    }
    firstNames.sort()
    firstNames.forEach(name => console.log(name));
}
