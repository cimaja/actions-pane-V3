// Import icon definitions from our centralized icon library
import { CommonIcons, IconDefinition } from '../config/iconLibraries';

export interface ActionSource {
  name: string;
  icon: IconDefinition;
  color: string;
  categories: ActionCategory[];
}

export interface ActionCategory {
  name: string;
  icon: IconDefinition;
  color: string;
  modules: ActionModule[];
}

export interface ActionModule {
  name: string;
  icon: IconDefinition;
  color: string;
  description?: string;
  submodules: ActionSubmodule[];
  documentationUrl?: string;
  publisher?: string;
  category?: string;
  lastUpdated?: string;
  tags?: string[];
}

export interface ActionSubmodule {
  name: string;
  actions: string[];
}

export const actionSources: ActionSource[] = [
  {
    name: 'PAD Action',
    icon: CommonIcons.web,
    color: 'bg-blue-100 text-blue-600',
    categories: [
      {
        name: 'Files',
        icon: CommonIcons.file,
        color: 'bg-yellow-100 text-yellow-600',
        modules: [
          {
            tags: ['built-in'],
            name: 'Date time',
            icon: CommonIcons.clock,
            color: 'bg-blue-100 text-blue-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Add to datetime',
                  'Get current date and time',
                  'Subtract dates'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Files',
            icon: CommonIcons.fileText,
            color: 'bg-yellow-100 text-yellow-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Convert Base64 to file',
                  'Convert binary data to file',
                  'Convert file to Base64',
                  'Convert file to binary data',
                  'Copy file(s)',
                  'Delete file(s)',
                  'Get file path part',
                  'Get temporary file',
                  'If file exists',
                  'Move file(s)',
                  'Read from CSV file',
                  'Read text from file',
                  'Rename file(s)',
                  'Wait for file',
                  'Write text to file',
                  'Write to CSV file'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Folders',
            icon: CommonIcons.folder,
            color: 'bg-blue-100 text-blue-600',
            submodules: [
              {
                name: '',
                actions: [
                  'If folder exists',
                  'Get files in folder',
                  'Get subfolders in folder',
                  'Create folder',
                  'Delete folder',
                  'Empty folder',
                  'Copy folder',
                  'Move folder',
                  'Rename folder',
                  'Get special folder'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'PDF',
            icon: CommonIcons.filePdf,
            color: 'bg-red-100 text-red-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Extract images from PDF',
                  'Extract PDF file pages to new PDF file',
                  'Extract tables from PDF',
                  'Extract text from PDF',
                  'Merge PDF files'
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Interaction',
        icon: CommonIcons.deviceDesktop,
        color: 'bg-rose-100 text-rose-600',
        modules: [
          {
            tags: ['built-in'],
            name: 'Browser Automation',
            icon: CommonIcons.globe,
            color: 'bg-blue-100 text-blue-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Click download link on web page',
                  'Click link on web page',
                  'Close web browser',
                  'Create new tab',
                  'Go to web page',
                  'Hover mouse over element on web page',
                  'If web page contains',
                  'Launch new Chrome',
                  'Launch new Firefox',
                  'Launch new Internet Explorer',
                  'Launch new Microsoft Edge',
                  'Run JavaScript function on web page',
                  'Wait for web page content',
                  'Web data extraction',
                  'Web form filling'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'UI Automation',
            icon: CommonIcons.monitorSmartphone,
            color: 'bg-rose-100 text-rose-600',
            submodules: [
              {
                name: 'Data extraction',
                actions: [
                  'Get details of window',
                  'Get details of the UI element in window',
                  'Get selected checkboxes in window',
                  'Get selected radio button in window',
                  'Extract data from window',
                  'Extract data from table',
                  'Take screenshot of UI element'
                ]
              },
              {
                name: 'Form filling',
                actions: [
                  'Focus text field in window',
                  'Populate text field in window',
                  'Press button in window',
                  'Select radio button in window',
                  'Set checkbox state in window',
                  'Set drop-down list value in window'
                ]
              },
              {
                name: 'Window management',
                actions: [
                  'Get window',
                  'Focus window',
                  'Set window state',
                  'Set window visibility',
                  'Move window',
                  'Resize window',
                  'Close window'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Message boxes',
            icon: CommonIcons.messageSquare,
            color: 'bg-indigo-100 text-indigo-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Display message',
                  'Display input dialog',
                  'Display select date dialog',
                  'Display select from list dialog',
                  'Display select file dialog',
                  'Display select folder dialog',
                  'Display custom form'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Mouse and keyboard',
            icon: CommonIcons.keyboard,
            color: 'bg-slate-100 text-slate-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Block input',
                  'Get mouse position',
                  'Move mouse',
                  'Move mouse to image',
                  'Move mouse to text on screen (OCR)',
                  'Send mouse click',
                  'Send keys',
                  'Press/release key',
                  'Set key state',
                  'Wait for mouse',
                  'Get keyboard identifier',
                  'Wait for shortcut key'
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'System',
        icon: CommonIcons.settings,
        color: 'bg-slate-100 text-slate-600',
        modules: [
          {
            tags: ['built-in'],
            name: 'Clipboard',
            icon: CommonIcons.clipboard,
            color: 'bg-amber-100 text-amber-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Get clipboard text',
                  'Set clipboard text',
                  'Clear clipboard contents'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Workstation Control',
            icon: CommonIcons.monitor,
            color: 'bg-slate-100 text-slate-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Print document',
                  'Get default printer',
                  'Set default printer',
                  'Show desktop',
                  'Lock workstation',
                  'Play sound',
                  'Empty recycle bin',
                  'Take screenshot',
                  'Control screen saver',
                  'Get screen resolution',
                  'Set screen resolution',
                  'Log off user',
                  'Shutdown computer'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Environment Settings',
            icon: CommonIcons.settings,
            color: 'bg-emerald-100 text-emerald-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Set Windows environment variable',
                  'Get Windows environment variable',
                  'Delete Windows environment variable'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Process Management',
            icon: CommonIcons.terminal,
            color: 'bg-violet-100 text-violet-600',
            submodules: [
              {
                name: '',
                actions: [
                  'If process',
                  'Wait for process',
                  'Run application',
                  'Terminate process',
                  'Ping'
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Logic',
        icon: CommonIcons.network,
        color: 'bg-blue-100 text-blue-600',
        modules: [
          {
            tags: ['built-in'],
            name: 'Conditionals',
            icon: CommonIcons.network,
            color: 'bg-blue-100 text-blue-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Case',
                  'Default case',
                  'Else',
                  'Else if',
                  'If',
                  'Switch'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Flow control',
            icon: CommonIcons.messageSquareCode,
            color: 'bg-purple-100 text-purple-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Comment',
                  'End',
                  'Region',
                  'End region',
                  'Get last error',
                  'Go to',
                  'Label',
                  'On block error',
                  'Run desktop flow',
                  'Run subflow',
                  'Exit subflow',
                  'Stop flow',
                  'Wait'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Loops',
            icon: CommonIcons.repeat,
            color: 'bg-green-100 text-green-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Exit loop',
                  'For each',
                  'Loop',
                  'Loop condition',
                  'Next loop'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Variables',
            icon: CommonIcons.variable,
            color: 'bg-indigo-100 text-indigo-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Increase variable',
                  'Decrease variable',
                  'Set variable'
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Advanced',
        icon: CommonIcons.wrench,
        color: 'bg-slate-100 text-slate-600',
        modules: [
          {
            tags: ['built-in'],
            name: 'Scripting',
            icon: CommonIcons.code,
            color: 'bg-purple-100 text-purple-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Run DOS command',
                  'Run VBScript',
                  'Run JavaScript',
                  'Run PowerShell script',
                  'Run Python script',
                  'Run .NET script'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Cryptography',
            icon: CommonIcons.lock,
            color: 'bg-green-100 text-green-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Encrypt text with AES',
                  'Decrypt text with AES',
                  'Encrypt from file with AES',
                  'Decrypt to file with AES',
                  'Hash text',
                  'Hash from file',
                  'Hash text with key',
                  'Hash from file with key'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Windows services',
            icon: CommonIcons.command,
            color: 'bg-blue-100 text-blue-600',
            submodules: [
              {
                name: '',
                actions: [
                  'If service',
                  'Wait for service',
                  'Start service',
                  'Stop service',
                  'Pause service',
                  'Resume service'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'XML',
            icon: CommonIcons.xml,
            color: 'bg-orange-100 text-orange-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Read XML from file',
                  'Write XML to file',
                  'Execute XPath expression',
                  'Get XML element attribute',
                  'Set XML element attribute',
                  'Remove XML element attribute',
                  'Get XML element value',
                  'Set XML element value',
                  'Insert XML element',
                  'Remove XML element'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'CMD session',
            icon: CommonIcons.terminal,
            color: 'bg-gray-100 text-gray-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Open CMD session',
                  'Read from CMD session',
                  'Write to CMD session',
                  'Wait for text on CMD session',
                  'Close CMD session'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Terminal emulation',
            icon: CommonIcons.terminal,
            color: 'bg-slate-100 text-slate-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Open terminal session',
                  'Close terminal session',
                  'Move cursor on terminal session',
                  'Get text from terminal session',
                  'Set text on terminal session',
                  'Send key to terminal session',
                  'Wait for text on terminal session',
                  'Search for text on terminal session'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'FTP',
            icon: CommonIcons.ftp,
            color: 'bg-indigo-100 text-indigo-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Open FTP connection',
                  'List FTP directory',
                  'Open secure FTP connection',
                  'Close connection',
                  'Change working directory',
                  'Download file(s) from FTP',
                  'Download folder(s) from FTP',
                  'Upload file(s) to FTP',
                  'Upload folder(s) to FTP',
                  'Delete FTP file',
                  'Rename FTP file',
                  'Create FTP directory',
                  'Delete FTP directory',
                  'Invoke FTP command',
                  'Synchronize directories'
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Integration',
        icon: CommonIcons.share,
        color: 'bg-purple-100 text-purple-600',
        modules: [
          {
            tags: ['built-in'],
            name: 'Access',
            icon: CommonIcons.database,
            color: 'bg-blue-100 text-blue-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Close Access',
                  'Launch Access',
                  'Read Access table',
                  'Run Access macro',
                  'Run Access query'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Active Directory',
            icon: CommonIcons.users,
            color: 'bg-green-100 text-green-600',
            submodules: [
              {
                name: 'Group',
                actions: [
                  'Create group',
                  'Get group info',
                  'Get group members',
                  'Modify group'
                ]
              },
              {
                name: 'Object',
                actions: [
                  'Create object',
                  'Delete object',
                  'Move object',
                  'Rename object'
                ]
              },
              {
                name: 'User',
                actions: [
                  'Connect to server',
                  'Close connection',
                  'Create user',
                  'Get user info',
                  'Modify user',
                  'Unlock user',
                  'Update user info'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'AI Builder',
            icon: CommonIcons.brainCircuit,
            color: 'bg-indigo-100 text-indigo-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Create text with GPT (Preview)'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Azure',
            icon: CommonIcons.cloud,
            color: 'bg-blue-100 text-blue-600',
            submodules: [
              {
                name: 'Resource groups',
                actions: [
                  'Create resource group',
                  'Delete resource group',
                  'Get resource groups'
                ]
              },
              {
                name: 'Virtual machines',
                actions: [
                  'Describe virtual machine',
                  'Get virtual machines',
                  'Restart virtual machine',
                  'Shut down virtual machine',
                  'Start virtual machine',
                  'Stop virtual machine'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'CyberArk',
            icon: CommonIcons.key,
            color: 'bg-red-100 text-red-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Get password from CyberArk'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Email',
            icon: CommonIcons.mail,
            color: 'bg-amber-100 text-amber-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Process email messages',
                  'Retrieve email messages',
                  'Send email'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Excel',
            icon: CommonIcons.spreadsheet,
            color: 'bg-green-100 text-green-600',
            submodules: [
              {
                name: 'General Actions',
                actions: [
                  'Add new worksheet',
                  'Attach to running Excel',
                  'Clear cells in Excel worksheet',
                  'Clear filters in Excel worksheet',
                  'Close Excel',
                  'Filter cells in Excel worksheet',
                  'Get active cell on Excel worksheet',
                  'Get column name on Excel worksheet',
                  'Get empty cell',
                  'Get first free column/row from Excel worksheet',
                  'Launch Excel',
                  'Read from Excel worksheet',
                  'Save Excel',
                  'Set active Excel worksheet',
                  'Sort cells in Excel worksheet',
                  'Write to Excel worksheet'
                ]
              },
              {
                name: 'Advanced',
                actions: [
                  'Activate cell in Excel worksheet',
                  'Append cells in Excel worksheet',
                  'Auto fill cells in Excel worksheet',
                  'Copy cells from Excel worksheet',
                  'Copy Excel worksheet',
                  'Delete column from Excel worksheet',
                  'Delete Excel worksheet',
                  'Delete from Excel worksheet',
                  'Delete row from Excel worksheet',
                  'Find and replace cells in Excel worksheet',
                  'Get active Excel worksheet',
                  'Get all Excel worksheets',
                  'Get first free row on column from Excel worksheet',
                  'Get table range from Excel worksheet',
                  'Insert column to Excel worksheet',
                  'Insert row to Excel worksheet',
                  'Lookup range in Excel worksheet',
                  'Paste cells to Excel worksheet',
                  'Read formula from Excel',
                  'Resize columns/rows in Excel worksheet',
                  'Run Excel macro',
                  'Select cells in Excel worksheet',
                  'Set color of cells in Excel worksheet'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Exchange Server',
            icon: CommonIcons.mailbox,
            color: 'bg-blue-100 text-blue-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Connect to Exchange server',
                  'Process Exchange email messages',
                  'Retrieve Exchange email messages',
                  'Send Exchange email message'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Google Cognitive',
            icon: CommonIcons.eye,
            color: 'bg-red-100 text-red-600',
            submodules: [
              {
                name: 'Natural Language',
                actions: [
                  'Analyze sentiment',
                  'Analyze entities',
                  'Analyze syntax'
                ]
              },
              {
                name: 'Vision',
                actions: [
                  'Label detection',
                  'Landmark detection',
                  'Text detection',
                  'Logo detection',
                  'Image properties detection',
                  'Safe search detection'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Microsoft Cognitive',
            icon: CommonIcons.brainCircuit,
            color: 'bg-purple-100 text-purple-600',
            submodules: [
              {
                name: 'Computer Vision',
                actions: [
                  'Analyze image',
                  'Describe image',
                  'OCR',
                  'Tag image'
                ]
              },
              {
                name: 'Bing Spell Check',
                actions: [
                  'Spell check'
                ]
              },
              {
                name: 'Logging',
                actions: [
                  'Log message'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Outlook',
            icon: CommonIcons.mail,
            color: 'bg-blue-100 text-blue-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Close Outlook',
                  'Launch Outlook',
                  'Process email messages in Outlook',
                  'Respond to Outlook message',
                  'Retrieve email messages from Outlook',
                  'Save Outlook email messages',
                  'Send email message through Outlook'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'SQL',
            icon: CommonIcons.database,
            color: 'bg-amber-100 text-amber-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Close SQL connection',
                  'Execute SQL statement',
                  'Open SQL connection'
                ]
              }
            ]
          },
          {
            tags: ['built-in'],
            name: 'Work queues',
            icon: CommonIcons.clipboard,
            color: 'bg-indigo-100 text-indigo-600',
            submodules: [
              {
                name: '',
                actions: [
                  'Add multiple work queue items',
                  'Add work queue item',
                  'Get work queue items by filter',
                  'Process work queue items',
                  'Requeue item with delay',
                  'Update work queue item',
                  'Update work queue item processing notes'
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Connector',
    icon: CommonIcons.server,
    color: 'bg-purple-100 text-purple-600',
    categories: [
      {
        name: 'Microsoft 365',
        icon: CommonIcons.cloud,
        color: 'bg-blue-100 text-blue-600',
        modules: [
          {
            tags: ['connector'],
            name: 'Azure Blob Storage',
            icon: CommonIcons.database,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to Azure Blob Storage to manage your blobs and containers',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/azureblob/',
            publisher: 'Microsoft',
            category: 'Cloud Storage',
            lastUpdated: '2025-02-20',
            submodules: [
              {
                name: '',
                actions: [
                  'Copy blob',
                  'Create container',
                  'Create blob',
                  'Delete blob',
                  'Delete container',
                  'Extract archive to folder',
                  'Get blob content',
                  'Get blob metadata',
                  'Get container metadata',
                  'List blobs',
                  'List containers',
                  'Set container metadata',
                  'Update blob'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Azure DevOps',
            icon: CommonIcons.code,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to Azure DevOps to manage work items, builds, and repositories',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/visualstudioteamservices/',
            publisher: 'Microsoft',
            category: 'Development',
            lastUpdated: '2025-02-20',
            submodules: [
              {
                name: '',
                actions: [
                  'Add comment to work item',
                  'Create pull request',
                  'Create work item',
                  'Get build',
                  'Get build logs',
                  'Get builds',
                  'Get commits',
                  'Get pull requests',
                  'Get repositories',
                  'Get repository',
                  'Get work item',
                  'Get work item comments',
                  'Get work items',
                  'Query work items',
                  'Queue a build',
                  'Update build',
                  'Update pull request',
                  'Update work item'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Azure Key Vault',
            icon: CommonIcons.lock,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to Azure Key Vault to manage your secrets, keys, and certificates',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/keyvault/',
            publisher: 'Microsoft',
            category: 'Security',
            lastUpdated: '2025-02-10',
            submodules: [
              {
                name: '',
                actions: [
                  'Create certificate',
                  'Create key',
                  'Decrypt with key',
                  'Delete certificate',
                  'Delete key',
                  'Delete secret',
                  'Encrypt with key',
                  'Get certificate',
                  'Get key',
                  'Get secret',
                  'List certificates',
                  'List keys',
                  'List secrets',
                  'Set secret',
                  'Sign with key',
                  'Verify with key'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Azure OpenAI',
            icon: CommonIcons.brainCircuit,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to Azure OpenAI to generate text, images, and embeddings',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/azureopenai/',
            publisher: 'Microsoft',
            category: 'AI',
            lastUpdated: '2025-03-10',
            submodules: [
              {
                name: '',
                actions: [
                  'Create embeddings',
                  'Create image variation',
                  'Edit image',
                  'Generate chat completions',
                  'Generate image',
                  'Generate text with GPT'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Bing Maps',
            icon: CommonIcons.globe,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to Bing Maps to get location information, calculate routes, and find points of interest',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/bingmaps/',
            publisher: 'Microsoft',
            category: 'Geolocation',
            lastUpdated: '2025-01-15',
            submodules: [
              {
                name: '',
                actions: [
                  'Calculate distance matrix',
                  'Calculate isochrone',
                  'Calculate route',
                  'Find nearby points of interest',
                  'Get address by location',
                  'Get location by address',
                  'Get location by query',
                  'Get time zone',
                  'Get traffic incidents',
                  'Search by category',
                  'Search by query'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Excel Online (Business)',
            icon: CommonIcons.spreadsheet,
            color: 'bg-green-100 text-green-600',
            description: 'Connect to Excel Online (Business) to manage workbooks, tables, and worksheets',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/excelonlinebusiness/',
            publisher: 'Microsoft',
            category: 'Productivity',
            lastUpdated: '2025-03-05',
            submodules: [
              {
                name: '',
                actions: [
                  'Add a key column to a table',
                  'Add a row into a table',
                  'Create table',
                  'Create worksheet',
                  'Delete a row',
                  'Get a row',
                  'Get tables',
                  'Get worksheets',
                  'List rows present in a table',
                  'Run script',
                  'Run script from SharePoint library',
                  'Update a row'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Microsoft Forms',
            icon: CommonIcons.form,
            color: 'bg-purple-100 text-purple-600',
            description: 'Connect to Microsoft Forms to manage form responses',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/microsoftforms/',
            publisher: 'Microsoft',
            category: 'Productivity',
            lastUpdated: '2025-02-10',
            submodules: [
              {
                name: '',
                actions: [
                  'Get response details'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Microsoft Teams',
            icon: CommonIcons.teams,
            color: 'bg-purple-100 text-purple-600',
            description: 'Connect to Microsoft Teams to manage teams, channels, chats, and messages',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/teams/',
            publisher: 'Microsoft',
            category: 'Communication',
            lastUpdated: '2025-03-01',
            submodules: [
              {
                name: '',
                actions: [
                  'Add a member to a tag',
                  'Add a member to a team',
                  'Create a channel',
                  'Create a chat',
                  'Create a tag for a team',
                  'Create a team',
                  'Create a Teams meeting',
                  'Delete a member from a tag',
                  'Delete a tag',
                  'Get a team',
                  'Get an @mention token for a tag',
                  'Get an @mention token for a user',
                  'Get message details',
                  'Get messages',
                  'List all tags for a team',
                  'List channels',
                  'List chats',
                  'List members',
                  'List teams',
                  'List the members of a tag',
                  'Post adaptive card and wait for a response',
                  'Post card in a chat or channel',
                  'Post feed notification',
                  'Post message in a chat or channel',
                  'Reply with an adaptive card in a channel',
                  'Reply with a message in a channel',
                  'Send a Microsoft Graph HTTP request',
                  'Update an adaptive card in a chat or channel'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Microsoft To Do',
            icon: CommonIcons.clipboard,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to Microsoft To Do to create and manage your tasks and lists',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/todo/',
            publisher: 'Microsoft',
            category: 'Productivity',
            lastUpdated: '2025-01-05',
            submodules: [
              {
                name: '',
                actions: [
                  'Complete task',
                  'Create a list',
                  'Create a task',
                  'Delete list',
                  'Delete task',
                  'Get list',
                  'Get task',
                  'List lists',
                  'List tasks',
                  'Update list',
                  'Update task'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Office 365 Outlook',
            icon: CommonIcons.mail,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to Office 365 Outlook for email, calendar, and contact management',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/office365/',
            publisher: 'Microsoft',
            category: 'Communication',
            lastUpdated: '2025-01-20',
            submodules: [
              {
                name: '',
                actions: [
                  'Create contact',
                  'Create event',
                  'Delete contact',
                  'Delete email',
                  'Delete event',
                  'Export email',
                  'Find meeting times',
                  'Get attachment',
                  'Get calendar view of events',
                  'Get calendars',
                  'Get contact',
                  'Get contact folders',
                  'Get contacts',
                  'Get email',
                  'Get emails',
                  'Get event',
                  'Get events',
                  'Get mail tips',
                  'Get room lists',
                  'Get rooms',
                  'Get rooms in room list',
                  'Mark as read or unread',
                  'Move email',
                  'Reply to email',
                  'Respond to an event invite',
                  'Send an email',
                  'Send email from shared mailbox',
                  'Send email with options',
                  'Send HTTP request',
                  'Set automatic replies',
                  'Update contact',
                  'Update contact photo',
                  'Update event'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'OneDrive for Business',
            icon: CommonIcons.hardDrive,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to OneDrive for Business to manage files and folders',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/onedriveforbusiness/',
            publisher: 'Microsoft',
            category: 'Storage',
            lastUpdated: '2025-02-28',
            submodules: [
              {
                name: 'Files', // Keep named submodule
                actions: [
                  'Convert file',
                  'Convert file using path',
                  'Copy file',
                  'Copy file using path',
                  'Create file',
                  'Create share link',
                  'Create share link by path',
                  'Delete file',
                  'Extract archive to folder',
                  'Find files in folder',
                  'Find files in folder by path',
                  'Get file content',
                  'Get file content using path',
                  'Get file metadata',
                  'Get file metadata using path',
                  'Get file thumbnail',
                  'List files in folder',
                  'List files in root folder',
                  'Move or rename a file',
                  'Move or rename a file using path',
                  'Update file',
                  'Upload file from URL'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'OneNote',
            icon: CommonIcons.fileText,
            color: 'bg-purple-100 text-purple-600',
            description: 'Connect to OneNote to create and manage your notebooks, sections, and pages',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/onenote/',
            publisher: 'Microsoft',
            category: 'Productivity',
            lastUpdated: '2025-01-15',
            submodules: [
              {
                name: '',
                actions: [
                  'Create notebook',
                  'Create page',
                  'Create section',
                  'Delete notebook',
                  'Delete page',
                  'Delete section',
                  'Get notebook',
                  'Get notebooks',
                  'Get page',
                  'Get page content',
                  'Get pages',
                  'Get section',
                  'Get sections',
                  'Update notebook',
                  'Update page',
                  'Update section'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Planner',
            icon: CommonIcons.clipboard,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to Microsoft Planner to create and manage tasks and plans',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/planner/',
            publisher: 'Microsoft',
            category: 'Productivity',
            lastUpdated: '2025-02-10',
            submodules: [
              {
                name: '',
                actions: [
                  'Complete task',
                  'Create a plan',
                  'Create a task',
                  'Create bucket',
                  'Delete plan',
                  'Delete task',
                  'Get plan details',
                  'Get task details',
                  'Get task details with format',
                  'List all tasks',
                  'List buckets',
                  'List plans',
                  'List tasks',
                  'Update plan',
                  'Update task'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Power BI',
            icon: CommonIcons.chart,
            color: 'bg-yellow-100 text-yellow-600',
            description: 'Connect to Power BI to manage and interact with your reports and dashboards',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/powerbi/',
            publisher: 'Microsoft',
            category: 'Analytics',
            lastUpdated: '2025-03-01',
            submodules: [
              {
                name: '',
                actions: [
                  'Add rows to dataset',
                  'Clone report',
                  'Export report',
                  'Get dashboard',
                  'Get dashboards',
                  'Get dataset',
                  'Get datasets',
                  'Get report',
                  'Get reports',
                  'Get tile',
                  'Get tiles',
                  'Refresh dataset',
                  'Refresh report'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'SharePoint',
            icon: CommonIcons.fileText,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to SharePoint Online to manage files, lists, and libraries',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/sharepointonline/',
            publisher: 'Microsoft',
            category: 'Content Management',
            lastUpdated: '2025-02-15',
            submodules: [
              {
                name: '',
                actions: [
                  'Add attachment',
                  'Approve hub site join request',
                  'Cancel hub site join request',
                  'Check in file',
                  'Check out file',
                  'Copy file',
                  'Copy folder',
                  'Create file',
                  'Create item',
                  'Create new folder',
                  'Create sharing link for a file or folder',
                  'Delete attachment',
                  'Delete file',
                  'Delete item',
                  'Discard check out',
                  'Extract folder',
                  'Generate document using Microsoft Syntex (preview)',
                  'Get all lists and libraries',
                  'Get attachment content',
                  'Get attachments',
                  'Get file content',
                  'Get file metadata',
                  'Get folder metadata',
                  'Get item',
                  'Get items',
                  'Get list views',
                  'Get lists',
                  'Grant access to an item or a folder',
                  'Join hub site',
                  'List folder',
                  'List root folder',
                  'Move file',
                  'Move folder',
                  'Resolve person',
                  'Send an HTTP request to SharePoint',
                  'Set content approval status',
                  'Set hub site join status to pending',
                  'Stop sharing an item or a file',
                  'Update file',
                  'Update item'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'SQL Server',
            icon: CommonIcons.database,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to SQL Server to manage your databases and execute queries',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/sql/',
            publisher: 'Microsoft',
            category: 'Database',
            lastUpdated: '2025-03-05',
            submodules: [
              {
                name: '',
                actions: [
                  'Delete row',
                  'Execute query',
                  'Execute stored procedure',
                  'Get rows',
                  'Get tables',
                  'Insert row',
                  'Update row'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Word Online (Business)',
            icon: CommonIcons.word,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to Word Online (Business) to work with Word documents',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/wordonlinebusiness/',
            publisher: 'Microsoft',
            category: 'Productivity',
            lastUpdated: '2025-01-15',
            submodules: [
              {
                name: '',
                actions: [
                  'Convert Word Document to PDF',
                  'Populate a Microsoft Word template'
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Third-Party Services',
        icon: CommonIcons.server,
        color: 'bg-purple-100 text-purple-600',
        modules: [
          {
            tags: ['connector'],
            name: 'Adobe PDF Tools',
            icon: CommonIcons.filePdf,
            color: 'bg-red-100 text-red-600',
            description: 'Connect to Adobe PDF Tools to create, manipulate, and extract content from PDF documents',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/adobepdftools/',
            publisher: 'Adobe',
            category: 'Document Management',
            lastUpdated: '2025-03-01',
            submodules: [
              {
                name: '',
                actions: [
                  'Combine PDF files',
                  'Compress PDF',
                  'Convert PDF to document format',
                  'Convert PDF to image',
                  'Create PDF from file',
                  'Create PDF from HTML',
                  'Extract images from PDF',
                  'Extract tables from PDF',
                  'Extract text from PDF',
                  'OCR PDF document',
                  'Protect PDF with password',
                  'Remove password from PDF',
                  'Split PDF'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Adobe Sign',
            icon: CommonIcons.fileText,
            color: 'bg-red-100 text-red-600',
            description: 'Connect to Adobe Sign to create, send, and manage agreements for e-signatures',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/adobesign/',
            publisher: 'Adobe',
            category: 'Document Management',
            lastUpdated: '2025-02-15',
            submodules: [
              {
                name: 'Agreements',
                actions: [
                  'Add recipients to agreement',
                  'Cancel an agreement',
                  'Create an agreement',
                  'Delete an agreement',
                  'Delete document',
                  'Download signed agreement',
                  'Get agreement details',
                  'Get all agreements',
                  'Get all documents',
                  'Get document',
                  'Get recipients of agreement',
                  'Remove recipients from agreement',
                  'Send an agreement',
                  'Upload document'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Bitly',
            icon: CommonIcons.linkIcon,
            color: 'bg-orange-100 text-orange-600',
            description: 'Connect to Bitly to create and manage shortened URLs',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/bitly/',
            publisher: 'Bitly',
            category: 'Marketing',
            lastUpdated: '2025-01-10',
            submodules: [
              {
                name: '',
                actions: [
                  'Create a Bitlink',
                  'Get a Bitlink',
                  'Get Bitlinks by group',
                  'Get clicks for a Bitlink',
                  'Get clicks for a group',
                  'Get clicks summary for a Bitlink',
                  'Get group',
                  'Get groups',
                  'Get metrics by cities',
                  'Get metrics by countries',
                  'Get metrics by referrers',
                  'Update a Bitlink'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Box',
            icon: CommonIcons.folder,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to Box to manage files and folders in your Box account',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/box/',
            publisher: 'Box',
            category: 'Storage',
            lastUpdated: '2025-02-05',
            submodules: [
              {
                name: '',
                actions: [
                  'Add comment to file',
                  'Copy file',
                  'Copy folder',
                  'Create file',
                  'Create folder',
                  'Delete comment',
                  'Delete file',
                  'Delete folder',
                  'Delete permission',
                  'Download file',
                  'Get comments on file',
                  'Get file content',
                  'Get file information',
                  'Get folder information',
                  'Get folder items',
                  'Move file',
                  'Move folder',
                  'Reply to comment',
                  'Update file',
                  'Update folder',
                  'Upload file'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Dropbox',
            icon: CommonIcons.hardDrive,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to Dropbox to manage files and folders in your Dropbox account',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/dropbox/',
            publisher: 'Dropbox',
            category: 'Storage',
            lastUpdated: '2025-01-25',
            submodules: [
              {
                name: '',
                actions: [
                  'Copy file',
                  'Copy folder',
                  'Create file',
                  'Create folder',
                  'Create shared link',
                  'Delete file',
                  'Delete folder',
                  'Get file content',
                  'Get file metadata',
                  'Get shared link metadata',
                  'List folder contents',
                  'List shared links',
                  'Move file',
                  'Move folder',
                  'Remove shared link',
                  'Search for files and folders',
                  'Update file',
                  'Upload file'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'GitHub',
            icon: CommonIcons.git,
            color: 'bg-gray-100 text-gray-600',
            description: 'Connect to GitHub to manage repositories, issues, and pull requests',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/github/',
            publisher: 'GitHub',
            category: 'Development',
            lastUpdated: '2025-02-10',
            submodules: [
              {
                name: '',
                actions: [
                  'Add assignees to issue',
                  'Add comment to issue',
                  'Add labels to issue',
                  'Create issue',
                  'Create or update file content',
                  'Create pull request',
                  'Create pull request review',
                  'Create reference',
                  'Create repository',
                  'Delete file',
                  'Get branch',
                  'Get issue',
                  'Get pull request',
                  'Get reference',
                  'Get repository',
                  'Get repository content',
                  'List branches',
                  'List comments on issue',
                  'List issues',
                  'List pull request reviews',
                  'List pull requests',
                  'List references',
                  'List repositories',
                  'Merge pull request',
                  'Update issue',
                  'Update pull request'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Google Calendar',
            icon: CommonIcons.calendar,
            color: 'bg-red-100 text-red-600',
            description: 'Connect to Google Calendar to manage events, calendars, and attendees',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/googlecalendar/',
            publisher: 'Google',
            category: 'Productivity',
            lastUpdated: '2025-01-20',
            submodules: [
              {
                name: '',
                actions: [
                  'Accept event',
                  'Add attendee to event',
                  'Clear calendar',
                  'Create calendar',
                  'Create event',
                  'Decline event',
                  'Delete calendar',
                  'Delete event',
                  'Find available time',
                  'Get calendar',
                  'Get event',
                  'Get event attendees',
                  'Get free/busy schedule',
                  'List calendars',
                  'List events',
                  'Quick add event',
                  'Remove attendee from event',
                  'Tentatively accept event',
                  'Update calendar',
                  'Update event'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Google Drive',
            icon: CommonIcons.hardDrive,
            color: 'bg-green-100 text-green-600',
            description: 'Connect to Google Drive to manage files and folders in your Google Drive account',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/googledrive/',
            publisher: 'Google',
            category: 'Storage',
            lastUpdated: '2025-01-18',
            submodules: [
              {
                name: '',
                actions: [
                  'Add comment',
                  'Add permission',
                  'Copy file',
                  'Copy folder',
                  'Create file',
                  'Create folder',
                  'Delete comment',
                  'Delete file',
                  'Delete folder',
                  'Delete permission',
                  'Download file',
                  'Export file',
                  'Get comments',
                  'Get file content',
                  'Get file metadata',
                  'Get folder contents',
                  'Get folder metadata',
                  'Get permissions',
                  'Move folder',
                  'Reply to comment',
                  'Search files',
                  'Search folders',
                  'Share file',
                  'Update comment',
                  'Update file',
                  'Update folder',
                  'Update permission',
                  'Upload file'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Google Sheets',
            icon: CommonIcons.spreadsheet,
            color: 'bg-green-100 text-green-600',
            description: 'Connect to Google Sheets to manage spreadsheets, worksheets, and data',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/googlesheets/',
            publisher: 'Google',
            category: 'Productivity',
            lastUpdated: '2025-01-15',
            submodules: [
              {
                name: '',
                actions: [
                  'Add row',
                  'Add worksheet',
                  'Append values',
                  'Clear values',
                  'Clear worksheet',
                  'Create chart',
                  'Create filter view',
                  'Create spreadsheet',
                  'Delete row',
                  'Delete spreadsheet',
                  'Delete worksheet',
                  'Format range',
                  'Get row',
                  'Get spreadsheet',
                  'Get values',
                  'Get worksheet',
                  'List spreadsheets',
                  'List worksheets',
                  'Set conditional formatting',
                  'Update row',
                  'Update spreadsheet properties',
                  'Update values',
                  'Update worksheet properties'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Google Tasks',
            icon: CommonIcons.clipboard,
            color: 'bg-green-100 text-green-600',
            description: 'Connect to Google Tasks to manage tasks and task lists',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/googletasks/',
            publisher: 'Google',
            category: 'Productivity',
            lastUpdated: '2025-01-12',
            submodules: [
              {
                name: '',
                actions: [
                  'Clear completed tasks',
                  'Complete task',
                  'Create task',
                  'Create task list',
                  'Delete task',
                  'Delete task list',
                  'Get task',
                  'Get task list',
                  'List task lists',
                  'List tasks',
                  'Move task',
                  'Update task',
                  'Update task list'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Jira',
            icon: CommonIcons.clipboard,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to Jira to manage issues, projects, and workflows',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/jira/',
            publisher: 'Atlassian',
            category: 'Project Management',
            lastUpdated: '2025-02-15',
            submodules: [
              {
                name: '',
                actions: [
                  'Add attachment to issue',
                  'Add comment to issue',
                  'Assign issue',
                  'Create issue',
                  'Delete issue',
                  'Get comments on issue',
                  'Get current user',
                  'Get issue',
                  'Get issue attachments',
                  'Get project',
                  'Get project components',
                  'Get project issues',
                  'Get project versions',
                  'Get user',
                  'Get workflow',
                  'Get workflow transitions',
                  'List projects',
                  'List workflows',
                  'Search issues',
                  'Search users',
                  'Transition issue',
                  'Update issue'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'LinkedIn',
            icon: CommonIcons.linkedinIcon,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to LinkedIn to manage your professional network, share content, and engage with your audience',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/linkedinv2/',
            publisher: 'LinkedIn',
            category: 'Social Media',
            lastUpdated: '2025-02-08',
            submodules: [
              {
                name: '',
                actions: [
                  'Accept invitation',
                  'Comment on post',
                  'Delete post',
                  'Get company',
                  'Get company followers',
                  'Get company statistics',
                  'Get company updates',
                  'Get connection by ID',
                  'Get connections',
                  'Get pending invitations',
                  'Get post',
                  'Get post comments',
                  'Get post statistics',
                  'Get profile',
                  'Get profile picture',
                  'Get profile statistics',
                  'Ignore invitation',
                  'Like post',
                  'Send connection invitation',
                  'Share company update',
                  'Share post',
                  'Update profile'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'Salesforce',
            icon: CommonIcons.cloud,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to Salesforce to manage customer data, leads, opportunities, and more',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/salesforce/',
            publisher: 'Salesforce',
            category: 'CRM',
            lastUpdated: '2025-02-25',
            submodules: [
              {
                name: '',
                actions: [
                  'Add comment to case',
                  'Convert lead',
                  'Create account',
                  'Create case',
                  'Create contact',
                  'Create lead',
                  'Create opportunity',
                  'Delete account',
                  'Delete case',
                  'Delete contact',
                  'Delete lead',
                  'Delete opportunity',
                  'Get account',
                  'Get account contacts',
                  'Get case',
                  'Get contact',
                  'Get lead',
                  'Get opportunity',
                  'Get opportunity contacts',
                  'Search accounts',
                  'Search cases',
                  'Search contacts',
                  'Search leads',
                  'Search opportunities',
                  'Update account',
                  'Update case',
                  'Update contact',
                  'Update lead',
                  'Update opportunity'
                ]
              }
            ]
          },
          {
            tags: ['connector'],
            name: 'SAP',
            icon: CommonIcons.database,
            color: 'bg-blue-100 text-blue-600',
            description: 'Connect to SAP to manage business processes, data, and integrations',
            documentationUrl: 'https://learn.microsoft.com/en-us/connectors/sap/',
            publisher: 'SAP',
            category: 'Enterprise',
            lastUpdated: '2025-02-18',
            submodules: [
              {
                name: '',
                actions: [
                  'Call function import',
                  'Create business object',
                  'Create entity',
                  'Delete business object',
                  'Delete entity',
                  'Execute BAPI',
                  'Execute RFC',
                  'Get available BAPIs',
                  'Get available RFCs',
                  'Get BAPI metadata',
                  'Get business object',
                  'Get entities',
                  'Get entity',
                  'Get RFC metadata',
                  'Query business objects',
                  'Update business object',
                  'Update entity'
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];