# NoCode Platform using MOI's Cocolang Contracts

![Project Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1LOHO3bWSi_ROrBamAip0v3l6fNZXPEQTRJKCxG_4BLe9cVIJCm5xw25m4q8I3wcNbo&usqp=CAU)

## Table of Contents

- [About The Project](#about-the-project)
    - [Project Motivation](#project-motivation)
    - [Key Features](#key-features)
- [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Prerequisites](#prerequisites)
- [Technology Stack](#technology-stack)
- [How It Works](#how-it-works)
    - [Website Creation](#website-creation)
    - [AI-Powered Assistance](#ai-powered-assistance)
    - [NFT Integration](#nft-integration)
- [Contributing](#contributing)
- [License](#license)
- [Usage](#usage)
    - [Creating a Website](#creating-a-website)
    - [Editing with Visual HTML](#editing-with-visual-html)
    - [Managing Templates](#managing-templates)
    - [NFT Marketplace](#nft-marketplace)
- [Creating a Pull Request](#creating-a-pull-request)

## About The Project

The NoCode Platform using MOI's Cocolang Contracts is a groundbreaking solution that empowers users to create dynamic websites without any coding knowledge. This platform leverages MOI's Cocolang Contracts for secure and transparent interactions, ensuring user-generated content is stored as NFTs on the blockchain. With a drag-and-drop interface, AI-powered code assistance, and an integrated NFT marketplace, users can craft, edit, and trade their websites seamlessly.

### Project Motivation

Traditional website development often requires coding expertise, creating a barrier for non-technical users. The motivation behind this project is to democratize website creation, allowing anyone to design, modify, and share websites without writing code. The integration of MOI's Cocolang Contracts ensures data security, immutability, and tokenization of user creations.

### Key Features

- **Drag-and-Drop Website Creation:** Users can visually design websites by dragging and dropping elements onto the canvas.
- **Visual HTML Editing:** Edit HTML code visually using an intuitive interface with real-time preview.
- **AI-Powered Assistance:** An integrated chatbot offers code generation and problem-solving assistance.
- **Open-Source Templates:** Export and import open-source website templates for customization.
- **NFT Integration:** User-created websites are stored as NFTs, allowing for ownership and trading.
- **NFT Marketplace:** Buy and sell website templates and designs within the platform's marketplace.

## Getting Started

### Installation
# Nocode Storage Module Compilation and Deployment Guide

Welcome to the Nocode Storage Module Compilation and Deployment Guide! This guide will walk you through the process of compiling and deploying the Nocode Storage module using the Coco compiler and the Moi protocol. Follow the steps below to get started.

## Step 1: Compile the Nocode Storage Module

To begin, compile the Nocode Storage module using the Coco compiler. Open your terminal and execute the following command:

bashCopy code

`coco compile nocode_storage.coco --format json` 

This command will generate the `nocode_storage.json` file within the `bin` directory.

## Step 2: Deploy the Nocode Storage Logic

Deploy the Nocode Storage logic to the Moi protocol using the provided JavaScript code snippet. This code establishes a connection to the protocol and deploys the logic as specified. Before proceeding, make sure you have the necessary dependencies installed.

javascriptCopy code (deploy.js)

```
const provider = new VoyageProvider('babylon');

const initializeWallet = async () => {
    const derivationPath = "m/44'/6174'/0'/0/1";
    const wallet = new Wallet(provider);
    await wallet.fromMnemonic(MNEMONIC, derivationPath);
    return wallet;
}

const logicDeploy = async () => {
    const signer = await initializeWallet(provider);
    const factory = new LogicFactory(nocode_storage, signer);
    const args = [true];

    const response = await factory.deploy("Seed!", args).send({
        sender: signer.getAddress(),
        fuelPrice: 1,
        fuelLimit: 1000,
    });

    console.log("Deployment Hash: ", response.hash);

    const result = await response.result();
    console.log("Deployment Result: ", result);

    const receipt = await response.wait();
    console.log("Deployment Receipt: ", receipt);
}
```

Executing this step will deploy the manifest (`nocode_storage.json`). After successful deployment, you will receive a deployment hash, result, and receipt.

Follow these steps to set up and run the project locally:

1. Clone the repository: `git clone https://github.com/NagiPragalathan/Moi_Nocode_Hack.git`
2. Navigate to the project directory: `cd Frontend`
3. Install frontend dependencies: `npm install`
4. Running the App Locally

    1\. Setup environment variable:** Create a new directory named env in the root directory of your project. Inside the env directory, create a file named dev.env and add your seed phrase to this file.
    
    2\. Run the Application:** To run the application locally, follow these steps:
    
    - Navigate to the \`src\`\` directory using the terminal
        
        ```
        cd src
        ```
        
    - Install the required dependencies:
        
        ```
        npm install
        ```
        
    - Start the application:
        
        ```
        npm start
        ```
5. Install backend dependencies: `pip install -r requirements.txt`'
    1. Navigate to root:
   
        ```
       cd ..
        ```

    3. Navigate to the project directory:
    
        ```
       cd Backend
        ``` 
    
    3. Install the required dependencies using pip:
    
        ```
       pip install -r requirements.txt
        ``` 
    
    5. Run database migrations:
    
        ```
       python manage.py migrate
        ``` 
    
    7. Start the development server:
    
        ```
       python manage.py runserver
        ```

### Prerequisites

To run the project, you'll need the following:

- Node.js
- Python
- Django
- MOI's Cocolang Contracts

## Technology Stack

- Frontend: React
- Backend: Python (Django)
- Smart Contracts: MOI's Cocolang Contracts

## How It Works

### Website Creation

The NoCode Platform offers a user-friendly drag-and-drop interface that enables users to create websites effortlessly. Users can add elements, arrange layouts, and customize designs without writing a single line of code.

### AI-Powered Assistance

The integrated chatbot provides AI-powered assistance for code generation and problem-solving. Whether you're adding interactivity or troubleshooting, the chatbot streamlines the process.

### NFT Integration

Every user-created website is tokenized as an NFT on the blockchain. This integration ensures ownership, traceability, and the ability to buy or sell designs within the platform's NFT marketplace.

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m "Add your changes"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Create a pull request.

## License

This project is licensed under the MIT License. See [LICENSE]() for more details.

## Usage

### Creating a Website

1. Access the platform and log in.
2. Use the drag-and-drop editor to assemble your website's layout.
3. Customize colors, fonts, and images visually.

### Editing with Visual HTML

1. Navigate to the code editor.
2. Modify the HTML code visually with real-time preview.
3. Leverage the AI-powered chatbot for assistance.

### Managing Templates

1. Export your design as an open-source template.
2. Import templates created by the community.
3. Customize imported templates to suit your needs.

### NFT Marketplace

1. Visit the NFT marketplace section.
2. Browse user-generated website designs.
3. Buy or sell designs using cryptocurrency.

## Creating a Pull Request

Refer to the [Contributing](#contributing) section for details on creating a pull request.
